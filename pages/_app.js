import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/theme';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/app/app.css';
import { setCookie, parseCookies } from 'nookies';
import AcceptTerms from '../components/terms';

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

  static async getInitialProps({ Component, ctx }) {

    const {accepted_terms} = parseCookies(ctx);

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps,  accepted_terms};
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

    return (
      <Container>
        <Head>
          <title>I&apos;m Danstan ~ Zemuldo</title>
          <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
          <AcceptTerms accepted_terms= {this.props.accepted_terms} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
