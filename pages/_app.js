import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import CssBaseline from '@material-ui/core/CssBaseline';
import themes, {darkTheme, lightTheme} from '../components/theme';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/app/app.css';
import VersionInfo from '../components/versionInfo';
import ThemeToggle from '../components/ThemeToggle';
import Providers from '../components/Providers';
import styled from 'styled-components';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { setCookie } from 'nookies';

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: '194b14a9-2b53-4464-8c6c-d17b171582e5'
    /* ...Other Configuration Options... */
  }
});
const telemetryInitializer = (envelope) => {
  if (envelope.baseData && envelope.baseData.uri) {
    const uri = new URL(envelope.baseData.uri);
    if (uri.origin.includes('localhost')) {
      return false;
    }
    envelope.baseData.uri = `${uri.origin}${uri.pathname}`;
  }
  return true;
};

appInsights.loadAppInsights();
appInsights.addTelemetryInitializer(telemetryInitializer);
appInsights.trackPageView();

class MyApp extends App {

  constructor(props) {
    super(props);
    this.theme = 'dark';
    const sessionTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') || props.theme || 'dark' : props.theme || 'dark';
    this.state = { mounted: false, currentTheme: sessionTheme, theme: themes[`${sessionTheme}Theme`] };
  }

  changeTheme = (newTheme) => {
    this.setState({ theme: themes[`${newTheme}Theme`], currentTheme: newTheme });
    localStorage.setItem('theme', newTheme);
    setCookie(null, 'theme', newTheme, {
      maxAge: 10 * 365 * 24 * 60 * 60,
      path: '/',
    });
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    this.setState({ mounted: true });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link rel='stylesheet' type='text/css' href='/css/nprogress.css' />
        </Head>

        <Providers>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <VersionInfo />
          <Component {...pageProps} />
        </Providers>
      </>
    );
  }
}

export default MyApp;
