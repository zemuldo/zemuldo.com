import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { parseCookies } from 'nookies';

const api_url = process.env.API_URL;

export default function (ComposedComponent) {
  class IfLoggedIn extends React.Component {
    static getInitialProps(ctx) {
      const { query } = ctx;
      const { authorized } = parseCookies(ctx);
      return {
        authorized: authorized === '1',
        query,
      };
    }

    componentDidMount() {
      const { query, authorized } = this.props;
      if (authorized) window.location = query.redirectTo || '/blog';
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  IfLoggedIn.propTypes = {
    query: PropTypes.object.isRequired,
    authorized: PropTypes.bool,
    loggedIn: PropTypes.bool,
  };

  return withRouter(IfLoggedIn);
}
