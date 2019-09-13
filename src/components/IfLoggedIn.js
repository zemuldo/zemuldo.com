import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { parseCookies } from 'nookies';

export default function (ComposedComponent) {
  class IfLoggedIn extends React.Component {

    static getInitialProps(ctx) {
      const { query } = ctx;
      const { authorization } = parseCookies(ctx);
      const loinState = {
        loggingIn: !!ctx.query.token
      };
      if (authorization) {
        return {
          ...loinState,
          loggedIn: true,
          authorization,
          authorized: true,
          query,
        };
      }
      return {
        ...loinState,
        authorized: false,
        query
      };
    }

    componentDidMount() {
      const { query, loggedIn } = this.props;

      const authorization = localStorage.getItem('authorization');
      if (authorization) window.location = query.redirectTo || '/blog';
      if (loggedIn || query.token && query.redirectTo) {
        if (query.token) localStorage.setItem('authorization', query.token);
        window.location = query.redirectTo || '/blog';
      } else if (loggedIn || query.token) {
        if (query.token) localStorage.setItem('authorization', query.token);
        window.location = '/blog';
      }
    }



    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  IfLoggedIn.propTypes = {
    query: PropTypes.object.isRequired,
    loggingIn: PropTypes.bool,
    loggedIn: PropTypes.bool
  };

  return withRouter(IfLoggedIn);
}
