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
        <div className='version-details'>
        <div>
          <span className='color-1'>@</span>
          <span className='color-6'>Version</span>
          {' : '}
          <span className='color-orange'> {process.env.VERSION}</span>
        </div>
        <div>
          <span className='color-1'>@</span>
          <span className='color-6'>Build</span>
          {' : '}
          <span className='color-orange'>
            {process.env.GITHUB_SHA.slice(0, 9)}
          </span>
        </div>
        <div className='branch'>
          <span className='color-1'>@</span>
          <span className='color-6'>
            Branch
          </span>
          {' : '}
          <span className='color-orange'>
            {process.env.BRANCH}
          </span>
        </div>
      </div>
        <div className='pages-wrapper'>
        <AcceptTerms accepted_terms= {this.props.accepted_terms} />
        <Component {...this.props} />
        </div>
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
