const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true'
});
const withCSS = require('@zeit/next-css');
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = withCSS(withBundleAnalyzer({
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    );
  
    return config;
  },
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
}));