import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from '../pages/_error';
import { parseCookies } from 'nookies';
import AcceptTerms from './terms';

export default Component => {
  class ErrorHandler extends React.Component {
    static async getInitialProps(ctx) {
      const { authorization, accepted_terms } = parseCookies(ctx);
      let props = {};
      if (Component.getInitialProps){
        props =  await Component.getInitialProps(ctx);
      }
      return { ...props, authorization, accepted_terms };
    }
    render() {
      if (this.props.statusCode) {
        return <ErrorPage errorCode={this.props.statusCode} />;
      }
      return <React.Fragment>
        <AcceptTerms accepted_terms= {this.props.accepted_terms} />
        <Component {...this.props} />
      </React.Fragment>
      ;
    }
  }

  ErrorHandler.propTypes = {
    statusCode: PropTypes.number,
    accepted_terms: PropTypes.string
  };

  return ErrorHandler;
};
