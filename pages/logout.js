import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import IfLoggedIn from '../components/IfLoggedIn';
import PleaseWait from '../components/please_wait';
import Entry from '../components/entry';

class Login extends React.Component {

  componentDidMount(){
    window.location.href = '/';
  }

  render() {
    return <PleaseWait/>;
  }
}

Login.propTypes = {
  query: PropTypes.object.isRequired,
  loggingIn: PropTypes.bool,
  loggedIn: PropTypes.bool
};

export const LoginComponent = withRouter(Login);

export default Entry(IfLoggedIn(withRouter(Login)));
