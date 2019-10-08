import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { parseCookies } from 'nookies';

export default function (ComposedComponent) {
  class IfLoggedIn extends React.Component {

    static getInitialProps(ctx) {
      const { query } = ctx;
      const { authorization } = parseCookies(ctx);
      return {
        authorization,
        query,
      };
    }

    componentDidMount() {
      const { query, authorization } = this.props;

      if (authorization) window.location = query.redirectTo || '/blog';
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  IfLoggedIn.propTypes = {
    query: PropTypes.object.isRequired,
    authorization: PropTypes.string,
    loggedIn: PropTypes.bool
  };

  return withRouter(IfLoggedIn);
}
