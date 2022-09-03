const express = require('express');
const posts = require('../../db/services/post');

const router = express();

const requires_auth = (req, res, next) => {
  if (!req.custom_user || !req.custom_user.id) return res.status(401).send('Please login first');
  next();
};

router.get('/top_tags', async (req, res) => {
  try {
    res.send(global.topTags);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }

});
router.get('/', async (req, res) => {
  try {
    const list = await posts.get(req.query);
    res.send(list);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }

});

router.get('/draft', requires_auth, async (req, res) => {
  try {
    const list = await posts.getDrafts(req.custom_user.id);
    res.send(list);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }

});

router.get('/draft/:draftId', async (req, res) => {
  try {
    const { draftId } = req.params;
    const list = await posts.getDraftById(draftId);
    res.send(list);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }

});

router.delete('/draft/:draftId', requires_auth, async (req, res) => {
  try {
    const { draftId } = req.params;
    const deleted = await posts.deleteDraft(draftId, req.custom_user.id);
    res.send(deleted);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }

});
router.post('/draft', requires_auth, async (req, res) => {
  try {
    const draft = await posts.createDraft({ ...req.body, authorId: req.custom_user.id });
    res.send(draft);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }

});
router.put('/draft/:_id', requires_auth, async (req, res) => {
  try {
    const { _id } = req.params;
    const draft = await posts.updateDraft({ update: { ...req.body }, _id: _id, authorId: req.custom_user.id });
    res.send(draft);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }

});
router.get('/latest', async (req, res) => {
  try {
    const post = await posts.getLatest();
    res.send(post);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }
});
router.get('/featured', async (req, res) => {
  try {
    const post = await posts.getFeatured();
    res.send(post);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }
});
router.get('/:postId', async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await posts.findById(postId);
    if (!post) return res.status(404).send(post);
    return res.send(post);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }
});
router.post('/:postId/track_views', async (req, res) => {
  const { postId } = req.params;
  try {
    await posts.updateViews(postId);
    return res.send('Success');
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }
});
router.post('/:postId/track_code_copy', async (req, res) => {
  const { postId } = req.params;
  try {
    await posts.trackCodeCopy(postId);
    return res.send('Success');
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }
});
router.post('/:postId/set_as_featured', requires_auth, async (req, res) => {
  const { postId } = req.params;
  try {
    await posts.setFeatured(postId);
    return res.send({status: 'ok'});
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }
});
router.post('/', requires_auth, async (req, res) => {
  try {
    const post = await posts.create({ ...req.body, authorId: req.custom_user.id });
    res.send(post);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }
});
router.put('/:postId', requires_auth, async (req, res) => {

  const { postId } = req.params;
  try {
    
    posts.updatePost(req.body);
    const post = await posts.findById(postId);
    if (req.custom_user.id !== post.post.authorId) throw Error('You don\'t own this post!');
    res.send(post);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }
});

module.exports = router;