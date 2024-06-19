import React from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import IfLoggedIn from '../../components/IfLoggedIn';
import PleaseWait from '../../components/please_wait';
import Entry from '../../components/entry';
import PageLayout from '../../components/PageLayout';
import Link from '../../components/link';
const api_url = process.env.NEXT_PUBLIC_API_URL;
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

class Login extends React.Component {

  componentDidMount(){
    if (this.props.query.token) window.location.reload();
  }

  render() {
    const { query, loggingIn } = this.props;
    if (loggingIn || query.token) return <PleaseWait/>;
    return (
      <>

        <Head>
          <title>I&apos;m Danstan ~ Zemuldo</title>
          <link
            href="/css/login.css"
            rel="stylesheet"
          />
        </Head>
        <PageLayout style={{ marginTop: '50%' }}>
          <Grid style={{ marginTop: '30%' }} justify="space-between" container spacing={2}>
            <Grid item xs={12} sm={6}>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Link href={`${api_url}/user/auth/github?redirectTo=${query.redirectTo || base_url}`}>
                <h1 className="color-6 login-button">Use Github</h1>
              </Link>
            </Grid>
          </Grid>
        </PageLayout>
      </>
    );
  }
}

Login.propTypes = {
  query: PropTypes.object.isRequired,
  loggingIn: PropTypes.bool,
  loggedIn: PropTypes.bool
};

export const LoginComponent = withRouter(Login);

export default Entry(IfLoggedIn(withRouter(Login)));
