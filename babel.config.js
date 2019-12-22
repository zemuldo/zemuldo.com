module.exports = {
  'presets': ['@babel/preset-env', 'next/babel'],
  'env': {
    'test': {
      'plugins': [
        'require-context-hook',
        'dynamic-import-node'
      ]
    }
  }
};
  