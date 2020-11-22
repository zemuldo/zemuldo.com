import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from '../pages/_error';
import { parseCookies } from 'nookies';
import AcceptTerms from './terms';
import VersionInfo from './versionInfo';
import { withRouter } from 'next/router';



const api_url = process.env.API_URL;

export default Component => {
  const Entry = (props) => {

    if (props.statusCode) {
      return <ErrorPage errorCode={props.statusCode} />;
    }
    return <>
      <VersionInfo />
      <div className='pages-wrapper'>
        <AcceptTerms accepted_terms={props.accepted_terms} />
        <Component {...props} />
      </div>
    </>;

  };

  Entry.getInitialProps = async (ctx) => {
    const { authorized, authorization, accepted_terms } = parseCookies(ctx);
    let user;
    if (authorized){
      const res = await fetch(`${api_url}/user`, {credentials: 'include', headers: {authorization: authorization || ''}});
      user = await res.json();
    }
    let props = {};
    if (Component.getInitialProps) {
      props = await Component.getInitialProps(ctx);
    }
    return { ...props, authorized: !!authorized, accepted_terms, user };
  };

  Entry.propTypes = {
    statusCode: PropTypes.number,
    accepted_terms: PropTypes.string
  };

  return withRouter(Entry);
};
