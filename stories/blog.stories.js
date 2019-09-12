import React from 'react';
import { storiesOf } from '@storybook/react';
import NewBlog from '../pages/blog/write/new';

localStorage.setItem("authorization", "some token")

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

storiesOf('Blog', module)
  .add('New', () => (
    <NewBlog {...props} />
  ))
