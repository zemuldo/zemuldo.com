import initStoryshots from '@storybook/addon-storyshots';

jest.mock('next/dynamic', () => () => 'Dynamic');

initStoryshots({ /* configuration options */ });