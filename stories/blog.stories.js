import React from 'react';
import { storiesOf } from '@storybook/react';
import NewBlog from '../pages/blog/write/new';
import BlogHome from '../pages/blog';
import Blog from '../pages/blog/post/[meta]';
import BlogEdit from '../pages/blog/post/[meta]/edit';

const post = {
  'postTitle': 'How to make sure that you always succeed',
  'body': 'Most people start off with little or low self-confidence, but as a result of their own efforts, they become bold and brave and outgoing. And we’ve discovered that if you do the same things that other self-confident men and women do, you, too, will experience the same feelings and get the same results.\r\n\r\nThe key is to be true to yourself, to be true to the very best that is in you, and to live your life consistent with your highest values and aspirations. This is the only way to truly learn how to believe in yourself.\r\n\r\nTake some time to think about who you are and what you believe in and what is important to you.\r\n\r\nIf you want to change your life by becoming an author, believe that you can do it. The hardest step in that journey is finding the confidence to learn how to write a book. Once you get a hold of a proven system to plan, produce, and publish your work, the larger goal becomes easier to attain.\r\n\r\nBy believing in yourself, you will find the courage to take immediate action on your goals. And this, as you may know, is the key to success!\r\n\r\nI encourage you to never compromise your integrity by trying to be or say or feel something that is not true for you.\r\n\r\nAnd – more importantly – never compromise your potential to grow due to self-limiting doubts. Instead, embrace your confidence and believe in yourself because you really can do anything you put your mind to.',
  'tags': [
    {
      'value': 'elixir',
      'label': 'Elixir',
      'color': '#a767f5'
    },
    {
      'value': 'ecto',
      'label': 'Ecto',
      'color': '#40a832'
    }
  ],
  'description': 'The best way to ensure that you succeed is to always love what you are doing and stay positive.',
  'coverPhotoUrl': 'https://miro.medium.com/max/1200/1*vKd5tDJmDFznrOkMh1kQGg.png',
  'publishDialogueOpen': false,
  'saving': true
};


localStorage.setItem('authorization', 'some token');
localStorage.setItem('state_5d79520a3d510b0fa5ae765a', JSON.stringify(post));
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
      title: 'How to make sure that you always succeed',
      description: 'The best way to ensure that you succeed is to always love what you are doing and stay positive.',
      coverPhotoUrl: 'https://miro.medium.com/max/1200/1*vKd5tDJmDFznrOkMh1kQGg.png',
      authorId: '19955045',
      createdAt: '2019-09-11T19:59:06.903Z',
      updatedAt: '2019-09-11T19:59:06.903Z',
      __v: 0
    },
    postBody: {
      deleted: false,
      _id: '5d79520a3d510b0fa5ae765b',
      body: 'Most people start off with little or low self-confidence, but as a result of their own efforts, they become bold and brave and outgoing. And we\u2019ve discovered that if you do the same things that other self-confident men and women do, you, too, will experience the same feelings and get the same results.\r\n\r\nThe key is to be true to yourself, to be true to the very best that is in you, and to live your life consistent with your highest values and aspirations. This is the only way to truly learn how to believe in yourself.\r\n\r\nTake some time to think about who you are and what you believe in and what is important to you.\r\n\r\nIf you want to change your life by becoming an author, believe that you can do it. The hardest step in that journey is finding the confidence to learn how to write a book. Once you get a hold of a proven system to plan, produce, and publish your work, the larger goal becomes easier to attain.\r\n\r\nBy believing in yourself, you will find the courage to take immediate action on your goals. And this, as you may know, is the key to success!\r\n\r\nI encourage you to never compromise your integrity by trying to be or say or feel something that is not true for you.\r\n\r\nAnd \u2013 more importantly \u2013 never compromise your potential to grow due to self-limiting doubts. Instead, embrace your confidence and believe in yourself because you really can do anything you put your mind to.',
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
      title: 'How to make sure that you always succeed',
      description: 'The best way to ensure that you succeed is to always love what you are doing and stay positive.',
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
    title: 'How to make sure that you always succeed',
    description: 'The best way to ensure that you succeed is to always love what you are doing and stay positive.',
    coverPhotoUrl: 'https://miro.medium.com/max/1200/1*vKd5tDJmDFznrOkMh1kQGg.png',
    authorId: '19955045',
    createdAt: '2019-09-11T19:59:06.903Z',
    updatedAt: '2019-09-11T19:59:06.903Z',
    __v: 0
  },
  body: {
    deleted: false,
    _id: '5d79520a3d510b0fa5ae765b',
    body: 'Most people start off with little or low self-confidence, but as a result of their own efforts, they become bold and brave and outgoing. And we\u2019ve discovered that if you do the same things that other self-confident men and women do, you, too, will experience the same feelings and get the same results.\r\n\r\nThe key is to be true to yourself, to be true to the very best that is in you, and to live your life consistent with your highest values and aspirations. This is the only way to truly learn how to believe in yourself.\r\n\r\nTake some time to think about who you are and what you believe in and what is important to you.\r\n\r\nIf you want to change your life by becoming an author, believe that you can do it. The hardest step in that journey is finding the confidence to learn how to write a book. Once you get a hold of a proven system to plan, produce, and publish your work, the larger goal becomes easier to attain.\r\n\r\nBy believing in yourself, you will find the courage to take immediate action on your goals. And this, as you may know, is the key to success!\r\n\r\nI encourage you to never compromise your integrity by trying to be or say or feel something that is not true for you.\r\n\r\nAnd \u2013 more importantly \u2013 never compromise your potential to grow due to self-limiting doubts. Instead, embrace your confidence and believe in yourself because you really can do anything you put your mind to.',
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
    title: 'How to make sure that you always succeed',
    description: 'The best way to ensure that you succeed is to always love what you are doing and stay positive.',
    coverPhotoUrl: 'https://miro.medium.com/max/1200/1*vKd5tDJmDFznrOkMh1kQGg.png',
    authorId: '19955045',
    createdAt: '2019-09-11T19:59:06.903Z',
    updatedAt: '2019-09-11T19:59:06.903Z',
    __v: 0
  },
  body: {
    deleted: false,
    _id: '5d79520a3d510b0fa5ae765b',
    body: 'Most people start off with little or low self-confidence, but as a result of their own efforts, they become bold and brave and outgoing. And we\u2019ve discovered that if you do the same things that other self-confident men and women do, you, too, will experience the same feelings and get the same results.\r\n\r\nThe key is to be true to yourself, to be true to the very best that is in you, and to live your life consistent with your highest values and aspirations. This is the only way to truly learn how to believe in yourself.\r\n\r\nTake some time to think about who you are and what you believe in and what is important to you.\r\n\r\nIf you want to change your life by becoming an author, believe that you can do it. The hardest step in that journey is finding the confidence to learn how to write a book. Once you get a hold of a proven system to plan, produce, and publish your work, the larger goal becomes easier to attain.\r\n\r\nBy believing in yourself, you will find the courage to take immediate action on your goals. And this, as you may know, is the key to success!\r\n\r\nI encourage you to never compromise your integrity by trying to be or say or feel something that is not true for you.\r\n\r\nAnd \u2013 more importantly \u2013 never compromise your potential to grow due to self-limiting doubts. Instead, embrace your confidence and believe in yourself because you really can do anything you put your mind to.',
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
