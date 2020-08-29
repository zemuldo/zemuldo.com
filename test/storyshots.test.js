import initStoryshots from '@storybook/addon-storyshots';

process.env.GITHUB_SHA = '78e0a4366feccf18764fb9fd7f9379546d0cb410';

jest.mock('next/dynamic', () => () => 'Dynamic');

initStoryshots({ /* configuration options */ });