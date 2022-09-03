const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true'
});

const withTM = require('next-transpile-modules');

module.exports = withTM((withBundleAnalyzer({
  env: {
    API_URL: process.env.API_URL,
    STATIC_IMAGES_URL: process.env.STATIC_IMAGES_URL,
    BASE_URL: process.env.BASE_URL,
    BASE_URL_DOMAIN: process.env.BASE_URL_DOMAIN,
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