import React from 'react';
import { storiesOf } from '@storybook/react';
import {LoginComponent} from '../pages/blog/login';

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
  .add('Not Logged', () => (
    <LoginComponent {...props} />
  ))
  .add('Loging in', () => (
    <LoginComponent {...props_logingIn} />
  ));
