const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true'
});

require('dotenv').config();

module.exports = (withBundleAnalyzer({
  env: {
    API_URL: process.env.API_URL,
   NEXT_PUBLIC_STATIC_IMAGES_URL: process.env.NEXT_PUBLIC_STATIC_IMAGES_URL,
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
}));