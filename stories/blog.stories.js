import React from 'react';
import { storiesOf } from '@storybook/react';
import NewBlog from '../pages/blog/write/new';
import BlogHome from '../pages/blog';
import Blog from '../pages/blog/post/[meta]';
import BlogEdit from '../pages/blog/post/[meta]/edit';

localStorage.setItem('authorization', 'some token');

const props = {
  classes: {
    greenAvatar: 'NewBlog-greenAvatar-1',
    root: 'NewBlog-root-2',
    floatingLabelFocusStyle: 'NewBlog-floatingLabelFocusStyle-3',
    materialInput: 'NewBlog-materialInput-4',
    materialTextArea: 'NewBlog-materialTextArea-5',
    container: 'NewBlog-container-6',
    textField: 'NewBlog-textField-7',
    dense: 'NewBlog-dense-8',
    menu: 'NewBlog-menu-9'
  },
  router: {
    pathname: '/blog/write/new',
    route: '/blog/write/new',
    query: {},
    asPath: '/blog/write/new',
    events: {}
  }
};

const blogs_props = {
  classes: {
    greenAvatar: 'Blog-greenAvatar-1',
    avatar: 'Blog-avatar-2',
    toolbar: 'Blog-toolbar-3',
    toolbarTitle: 'Blog-toolbarTitle-4',
    toolbarSecondary: 'Blog-toolbarSecondary-5',
    toolbarLink: 'Blog-toolbarLink-6',
    mainFeaturedPost: 'Blog-mainFeaturedPost-7',
    overlay: 'Blog-overlay-8',
    mainFeaturedPostContent: 'Blog-mainFeaturedPostContent-9',
    mainGrid: 'Blog-mainGrid-10',
    card: 'Blog-card-11',
    cardDetails: 'Blog-cardDetails-12',
    cardMedia: 'Blog-cardMedia-13',
    markdown: 'Blog-markdown-14',
    sidebarAboutBox: 'Blog-sidebarAboutBox-15',
    sidebarSection: 'Blog-sidebarSection-16'
  },
  featurePost: {
    post: {
      deleted: false,
      tags: [
        {
          value: 'elixir',
          label: 'Elixir',
          color: '#a767f5'
        },
        {
          value: 'ecto',
          label: 'Ecto',
          color: '#40a832'
        }
      ],
      _id: '5d79520a3d510b0fa5ae765a',
      title: 'How to make sure that you always succeede',
      description: 'The best way to ensure that you succeede is to always love what you are doing and stay positive.',
      coverPhotoUrl: 'https://miro.medium.com/max/1200/1*vKd5tDJmDFznrOkMh1kQGg.png',
      authorId: '19955045',
      createdAt: '2019-09-11T19:59:06.903Z',
      updatedAt: '2019-09-11T19:59:06.903Z',
      __v: 0
    },
    postBody: {
      deleted: false,
      _id: '5d79520a3d510b0fa5ae765b',
      body: 'asdasdsad sdsdfsdd ddfdfdfdfdfdfdfddrrrrr',
      postId: '5d79520a3d510b0fa5ae765a',
      createdAt: '2019-09-11T19:59:06.904Z',
      updatedAt: '2019-09-11T19:59:06.904Z',
      __v: 0
    }
  },
  posts: [
    {
      deleted: false,
      tags: [
        {
          value: 'nodejs',
          label: 'NodeJS',
          color: '#40a832'
        },
        {
          value: 'javascript',
          label: 'JavaCript',
          color: '#fcba03'
        }
      ],
      _id: '5d6754fefe8b7e3fc0707fce',
      title: 'How to use Ecto as a Query Schema validation library',
      description: 'Ecto is one of the greatest libraries in the Elixir community. It comes with Phoenix together.',
      coverPhotoUrl: 'https://miro.medium.com/max/1200/1*vKd5tDJmDFznrOkMh1kQGg.png',
      authorId: '19955045',
      createdAt: '2019-08-29T04:30:54.398Z',
      updatedAt: '2019-08-29T04:30:54.398Z',
      __v: 0
    },
    {
      deleted: false,
      tags: [
        {
          value: 'javascript',
          label: 'JavaCript',
          color: '#fcba03'
        }
      ],
      _id: '5d7951be3d510b0fa5ae7658',
      title: 'How to use Ecto as a Query Schema validation library',
      description: 'Ecto is one of the greatest libraries in the Elixir community. It comes with Phoenix together.',
      coverPhotoUrl: 'https://miro.medium.com/max/1200/1*vKd5tDJmDFznrOkMh1kQGg.png',
      authorId: '19955045',
      createdAt: '2019-09-11T19:57:50.633Z',
      updatedAt: '2019-09-11T19:57:50.633Z',
      __v: 0
    },
    {
      deleted: false,
      tags: [
        {
          value: 'elixir',
          label: 'Elixir',
          color: '#a767f5'
        },
        {
          value: 'ecto',
          label: 'Ecto',
          color: '#40a832'
        }
      ],
      _id: '5d79520a3d510b0fa5ae765a',
      title: 'How to make sure that you always succeede',
      description: 'The best way to ensure that you succeede is to always love what you are doing and stay positive.',
      coverPhotoUrl: 'https://miro.medium.com/max/1200/1*vKd5tDJmDFznrOkMh1kQGg.png',
      authorId: '19955045',
      createdAt: '2019-09-11T19:59:06.903Z',
      updatedAt: '2019-09-11T19:59:06.903Z',
      __v: 0
    }
  ]
};

const blog_props = {
  classes: {
    devTo: 'Blog-devTo-1',
    greenAvatar: 'Blog-greenAvatar-2',
    twitterAvatar: 'Blog-twitterAvatar-3',
    fbAvatar: 'Blog-fbAvatar-4',
    linkedinAvatar: 'Blog-linkedinAvatar-5'
  },
  post: {
    deleted: false,
    tags: [
      {
        value: 'elixir',
        label: 'Elixir',
        color: '#a767f5'
      },
      {
        value: 'ecto',
        label: 'Ecto',
        color: '#40a832'
      }
    ],
    _id: '5d79520a3d510b0fa5ae765a',
    title: 'How to make sure that you always succeede',
    description: 'The best way to ensure that you succeede is to always love what you are doing and stay positive.',
    coverPhotoUrl: 'https://miro.medium.com/max/1200/1*vKd5tDJmDFznrOkMh1kQGg.png',
    authorId: '19955045',
    createdAt: '2019-09-11T19:59:06.903Z',
    updatedAt: '2019-09-11T19:59:06.903Z',
    __v: 0
  },
  body: {
    deleted: false,
    _id: '5d79520a3d510b0fa5ae765b',
    body: 'asdasdsad sdsdfsdd ddfdfdfdfdfdfdfddrrrrr',
    postId: '5d79520a3d510b0fa5ae765a',
    createdAt: '2019-09-11T19:59:06.904Z',
    updatedAt: '2019-09-11T19:59:06.904Z',
    __v: 0
  }
};

const props_edit_blog = {
  classes: {
    greenAvatar: 'EditBlog-greenAvatar-1',
    root: 'EditBlog-root-2',
    floatingLabelFocusStyle: 'EditBlog-floatingLabelFocusStyle-3',
    materialInput: 'EditBlog-materialInput-4',
    materialTextArea: 'EditBlog-materialTextArea-5',
    container: 'EditBlog-container-6',
    textField: 'EditBlog-textField-7',
    dense: 'EditBlog-dense-8',
    menu: 'EditBlog-menu-9'
  },
  router: {
    pathname: '/blog/post/[meta]/edit',
    route: '/blog/post/[meta]/edit',
    query: {
      meta: '5d79520a3d510b0fa5ae765a'
    },
    asPath: '/blog/post/5d79520a3d510b0fa5ae765a/edit',
    events: {}
  },
  loggingIn: false,
  authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5OTU1MDQ1IiwiaWF0IjoxNTY4NDAzOTE5LCJleHAiOjE2NTQ4MDM5MTl9.sZifkSD7REnECvi17ByknFFBr61bg0fnaSDywhJSuHs',
  post: {
    deleted: false,
    tags: [
      {
        value: 'elixir',
        label: 'Elixir',
        color: '#a767f5'
      },
      {
        value: 'ecto',
        label: 'Ecto',
        color: '#40a832'
      }
    ],
    _id: '5d79520a3d510b0fa5ae765a',
    title: 'How to make sure that you always succeede',
    description: 'The best way to ensure that you succeede is to always love what you are doing and stay positive.',
    coverPhotoUrl: 'https://miro.medium.com/max/1200/1*vKd5tDJmDFznrOkMh1kQGg.png',
    authorId: '19955045',
    createdAt: '2019-09-11T19:59:06.903Z',
    updatedAt: '2019-09-11T19:59:06.903Z',
    __v: 0
  },
  body: {
    deleted: false,
    _id: '5d79520a3d510b0fa5ae765b',
    body: 'asdasdsad sdsdfsdd ddfdfdfdfdfdfdfddrrrrr',
    postId: '5d79520a3d510b0fa5ae765a',
    createdAt: '2019-09-11T19:59:06.904Z',
    updatedAt: '2019-09-11T19:59:06.904Z',
    __v: 0
  },
  authorized: true
};

storiesOf('Blog', module)
  .add('Blogs', () => (
    <BlogHome {...blogs_props} />
  ))
  .add('New', () => (
    <NewBlog {...props} />
  ))
  .add('Blog', () => (
    <Blog {...blog_props} />
  ))
  .add('Blog Edit', () => (
    <BlogEdit {...props_edit_blog} />
  ));
