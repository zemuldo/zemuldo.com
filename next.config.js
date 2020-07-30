const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true'
});
require('dotenv-flow').config();
const withTM = require('next-transpile-modules');

module.exports = withTM((withBundleAnalyzer({
  env: {
    UI_PORT: process.env.UI_PORT,
    UI_URL: process.env.UI_URL,
    UI_URL_DOMAIN: process.env.UI_URL_DOMAIN,
    SITE_IMAGES_URL: process.env.SITE_IMAGES_URL,
    API_URL: process.env.API_URL,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    GITHUB_SHA: process.env.GITHUB_SHA,
    VERSION: process.env.VERSION,
    BRANCH: process.env.BRANCH,
  },
  transpileModules: [
    'react-syntax-highlighter',
  ],
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
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
})));