import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import themes, {darkTheme, lightTheme} from '../components/theme';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/app/app.css';
import VersionInfo from '../components/versionInfo';
import ThemeToggle from '../components/ThemeToggle';

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
    const sessionTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') || 'dark' : 'dark';
    this.state = { mounted: false, currentTheme: sessionTheme, theme: themes[`${sessionTheme}Theme`] };
  }

  changeTheme = () => {
    if (this.state.currentTheme === 'light') {
      this.setState({ theme: darkTheme, currentTheme: 'dark' });
      localStorage.setItem('theme', 'dark');
    } else {
      this.setState({ theme: lightTheme, currentTheme: 'light' });
      localStorage.setItem('theme', 'light');
    }
  }

  componentDidMount() {
    const sessionTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') || 'dark' : 'dark';
    this.setState({ currentTheme: sessionTheme, theme: themes[`${sessionTheme}Theme`] });
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);

    }
    this.setState({mounted: true});
  }

  render() {
    if (!this.state.mounted) return null;
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link rel='stylesheet' type='text/css' href='/css/nprogress.css' />
        </Head>
        <ThemeProvider theme={this.state.theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <div key='theme' className='page-wrapper'>
            <VersionInfo />
            <ThemeToggle onChange={this.changeTheme} currentTheme={this.state.currentTheme} />
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
