import React from 'react';
import { storiesOf } from '@storybook/react';
import Index from '../pages/index';

storiesOf('Home Page', module)
  .add('Normal', () => (
    <Index/>
  ));
