module.exports = {
  'presets': ['@babel/preset-env', 'next/babel'],
  "plugins": [
    ["@babel/transform-runtime"]
],
  'env': {
    'test': {
      'plugins': [
        'require-context-hook',
        'dynamic-import-node',
        '@babel/transform-runtime'
      ]
    }
  }
};
  