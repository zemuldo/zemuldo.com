import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from '../pages/_error';
import { parseCookies } from 'nookies';
import AcceptTerms from './terms';
import VersionInfo from './versionInfo';
import HeaderElements from './document/head_elements';

export default Component => {
  class Enry extends React.Component {
    static async getInitialProps(ctx) {
      const { authorization, accepted_terms } = parseCookies(ctx);
      let props = {};
      if (Component.getInitialProps) {
        props = await Component.getInitialProps(ctx);
      }
      return { ...props, authorization, accepted_terms };
    }
    render() {
      if (this.props.statusCode) {
        return <ErrorPage errorCode={this.props.statusCode} />;
      }
      return <React.Fragment>
        <HeaderElements />
        <VersionInfo />
        <div className='pages-wrapper'>
          <AcceptTerms accepted_terms={this.props.accepted_terms} />
          <Component {...this.props} />
        </div>
      </React.Fragment>
      ;
    }
  }

  Enry.propTypes = {
    statusCode: PropTypes.number,
    accepted_terms: PropTypes.string
  };

  return Enry;
};
