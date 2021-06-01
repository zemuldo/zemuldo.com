import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {darkTheme, lightTheme} from '../components/theme';
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

class MyApp extends App {

  constructor(props) {
    super(props);
    this.state = { theme: darkTheme, currentTheme: 'dark' };
  }

  changeTheme = () => {
    if (this.state.currentTheme === 'light') this.setState({ theme: darkTheme, currentTheme: 'dark' });
    else this.setState({ theme: lightTheme, currentTheme: 'light' });
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
console.log(this.state.theme)

    return (
      <>
        <Head>
          <link rel='stylesheet' type='text/css' href='/css/nprogress.css' />
        </Head>
        <ThemeProvider theme={this.state.theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <div className='page-wrapper'>
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
