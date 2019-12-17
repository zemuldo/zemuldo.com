import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from '../pages/_error';
import { parseCookies } from 'nookies';
import AcceptTerms from './terms';
import VersionInfo from './versionInfo';
import HeaderElements from './document/head_elements';

export default Component => {
  const Entry = (props) => {
    if (props.statusCode) {
      return <ErrorPage errorCode={props.statusCode} />;
    }
    return <>
      <HeaderElements />
      <VersionInfo />
      <div className='pages-wrapper'>
        <AcceptTerms accepted_terms={props.accepted_terms} />
        <Component {...props} />
      </div>
    </>;

  };

  Entry.getInitialProps = async (ctx) => {
    const { authorization, accepted_terms } = parseCookies(ctx);
    let props = {};
    if (Component.getInitialProps) {
      props = await Component.getInitialProps(ctx);
    }
    return { ...props, authorization, accepted_terms };
  };

  Entry.propTypes = {
    statusCode: PropTypes.number,
    accepted_terms: PropTypes.string
  };

  return Entry;
};
