const Post = require('../models/post');
const Draft = require('../models/draft');
const PostBody = require('../models/postBody');
const FeaturedPost = require('../models/featuredPost');
const postView = require('../models/postView');
const codeCopy = require('../models/codeCopy');
const isSameDate = require('../../tools/is_same_date');
const logger = require('../../tools/logger');

module.exports = {
  get: async (params) => {
    let q = {};
    if (params.tag) q = {'tags.value': params.tag};
    return Post.find(q, [], {
      skip: parseInt(params.skip, 10),
      limit: parseInt(params.limit, 10),
      sort: {
        updatedAt: -1
      }
    });
  },
  getDrafts: async (authorId) => {
    return Draft.find({authorId});
  },

  getDraftById: async (id) => {
    return Draft.findById(id);
  },

  deleteDraft: async (id, authorId) => {
    return Draft.deleteOne({ _id: id, authorId });
  },
  getLatest: async () => {
    const post = await Post.findOne({}).sort([['createdAt', -1]]);
    const postBody = await PostBody.findOne({ postId: post._id });
    return { post: post, postBody: postBody };
  },
  findById: async (id) => {
    const post = await Post.findById(id);
    if (!post) return null;
    const postBody = await PostBody.findOne({ postId: post.id });
    return { post: post, postBody: postBody };
  },
  create: async (params) => {
    const post = new Post(params);
    const body = new PostBody({ ...params, postId: post._id });
    await post.save();
    await body.save();
    let draft = null;
    if (params.draftId) {
      draft = await Draft.remove({ _id: params.draftId });
    }
    return { post, body, draft };
  },

  deletePostById: async (id) => {
    const post = await Post.findById(id);

    if (!post) throw 'Deleting a post that doesn\'t exist.';

    const postBody = PostBody.findOne({ postId: post._id });

    return Promise.all([post.deleteOne(), postBody.deleteOne()]);

  },
  createDraft: async (params) => {
    const draft = new Draft(params);
    await draft.save();
    return draft;
  },
  updatePost: async (params) => {
    if (!params._id) throw Error('Update must come with _id');
    if (!params.update) throw Error('Update body must be sent');
    const post = await Post.updateOne({ _id: params._id }, params.update, { new: true });
    const postBody = await PostBody.updateOne({ postId: params._id }, params.update, { new: true });
    return { post, postBody };
  },
  updateDraft: async (params) => {
    if (!params._id) throw Error('Update must come with _id');
    if (!params.update) throw Error('Update body must be sent');
    const draft = await Draft.findById(params._id);

    if (draft.authorId !== params.authorId) throw Error('Unauthorized Access');

    if (!params.update.last_update) {
      const data = await draft.save();
      return { ...data._doc, rejected: true };
    }

    if (!isSameDate(params.update.last_update, draft.updatedAt)) {
      const data = await draft.save();
      return { ...data._doc, rejected: true };
    }

    draft.title = params.update.title;
    draft.body = params.update.body;
    draft.coverPhotoUrl = params.update.coverPhotoUrl;
    draft.description = params.update.description;
    draft.tags = params.update.tags;
    draft.updatedAt = Date.now();
    const data = await draft.save();
    return { ...data._doc, rejected: false };
  },
  getFeatured: async () => {
    const d = new Date();
    const currentPeriod = `${d.getMonth()}-${d.getFullYear()}`;
    const featuredId = await FeaturedPost.findOne({ period: currentPeriod }, [], {
      sort: {
        _id: -1
      }
    });

    if (featuredId) {
      const post = await Post.findOne({ _id: featuredId.postId });

      return post;
    }
    return null;
  },
  setFeatured: async (id) => {
    const d = new Date();
    const period = `${d.getMonth()}-${d.getFullYear()}`;
    const featuredPost = new FeaturedPost({ period, postId: id });
    await featuredPost.save();

  },
  updateViews: async (postId) => {
    await postView.findOneAndUpdate(
      { postId: postId },
      { $inc: { value: 1 } },
      { new: true, upsert: true }
    );
  },
  trackCodeCopy: async (postId) => {
    await codeCopy.findOneAndUpdate(
      { postId: postId },
      { $inc: { value: 1 } },
      { new: true, upsert: true }
    );
  },
  buildTopTags: async () => {
    Post.find({}, [], {
      limit: 100,
      sort: {
        updatedAt: -1
      }
    })
      .then(async posts => {
        const flat = posts.map((p => p.tags.map(t => t.value))).flat(1).reduce((acc, tag) => {
          acc[tag] = (acc[tag] || 0) + 1;
          return acc;
        }, {});

        const final = Object.keys(flat).map(k => ({ name: k, value: flat[k] })).sort((a, b) => (a.value < b.value) ? 1 : -1).slice(0, 8);
        global.topTags = final;
      } )
      .catch(_ => {
        logger.error('Failed to fetch posts in build top tags');
      });
  }
};