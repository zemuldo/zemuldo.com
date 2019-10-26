/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

const Styles = {};

const errorWrapper = (code, message) => {
  return (<div 
    style={{ 
      color: '#000', 
      fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif', 
      height: '100vh', 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center' }}
  >
    <div>
      <h1 
        style={{
          display: 'inline-block', 
          borderRight: '1px solid rgba(0, 0, 0,.3)', 
          margin: 0, marginRight: '10px', 
          padding: '10px 23px 10px 0', 
          fontSize: '24px', 
          fontWeight: 500, 
          verticalAlign: 'top' }}
      >
        {code}
        <span style={{color: '#fff', marginLeft: '20px'}}>|</span>
      </h1>
      <div style={{ display: 'inline-block', textAlign: 'left', lineHeight: '49px', height: '49px', verticalAlign: 'middle' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 'normal', lineHeight: 'inherit', margin: 0, padding: 0 }}>{message}{/* */}
        </h2>
      </div>
    </div>
  </div>);
};

class ErrorPage extends React.Component {

  render() {
    let response;
    switch (this.props.errorCode) {
      case 200:
      case 400:
        response = (
          <div>
            <Head>
              <style dangerouslySetInnerHTML={{ __html: Styles }} />
            </Head>
            <Container className="pt-5 text-center">
              {errorWrapper(400, 'You must have do something wrong. Thats all I know')}
            </Container>
          </div>
        );
        break;
      case 404:
        response = (
          <div>
            <Head>
              <style dangerouslySetInnerHTML={{ __html: Styles }} />
            </Head>
            <Container className="pt-5 text-center">
              {errorWrapper(404, 'The page can not be found.')}
            </Container>
          </div>
        );
        break;

      case 401:
        response = (
          <div>
            <Head>
              <style dangerouslySetInnerHTML={{ __html: Styles }} />
            </Head>
            <Container className="pt-5 text-center">
              {errorWrapper(401, 'You are not authorized to view this page')}
            </Container>
          </div>
        );
        break;
      case 500:
        response = (
          <div>
            <Head>
              <style dangerouslySetInnerHTML={{ __html: Styles }} />
            </Head>
            <Container className="pt-5 text-center">
              {errorWrapper(500, 'An internal server error occurred.')}
            </Container>
          </div>
        );
        break;
      default:
        response = (
          <div>
            <Head>
              <style dangerouslySetInnerHTML={{ __html: Styles }} />
            </Head>
            <Container className="pt-5 text-center">
              {errorWrapper(404, 'I cant find what you are looking for.')}
            </Container>
          </div>
        );
    }

    return response;
  }

}

ErrorPage.propTypes={
  errorCode: PropTypes.number
};

export default withRouter(ErrorPage);