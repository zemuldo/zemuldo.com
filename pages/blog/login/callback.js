import React from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import PleaseWait from '../../../components/please_wait';
import PageLayout from '../../../components/PageLayout';
import Entry from '../../../components/entry';
import IfLoggedIn from '../../../components/IfLoggedIn';
const api_url = process.env.API_URL;
const base_url = process.env.BASE_URL;

class Login extends React.Component {

  componentDidMount() {
    if (this.props.query.exit === 'true') {
      window.close();
    }
  }

  render() {
    const { query, loggingIn } = this.props;
    if (loggingIn || query.token) return <PleaseWait />;
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
              <p>asdasdasd</p>
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

