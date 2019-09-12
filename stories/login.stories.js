import React from 'react';
import { storiesOf } from '@storybook/react';
import Login from '../pages/blog/login';

const props = {
  router: {
    pathname: '/blog/login',
    route: '/blog/login',
    query: {},
    asPath: '/blog/login',
    events: {}
  },
  loggingIn: false,
  authorized: false,
  query: {}
};

const props_logingIn = {
  ...props,
  loggingIn: true
};

storiesOf('Login', module)
  .add('Not Loggedin', () => (
    <Login {...props} />
  ))
  .add('Loging in', () => (
    <Login {...props_logingIn} />
  ));
