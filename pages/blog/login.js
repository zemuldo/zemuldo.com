import React from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';
import Router, { withRouter } from 'next/router';

import { parseCookies } from 'nookies';

const api_url = process.env.API_URL;
const base_url = process.env.BASE_URL;

class Home extends React.Component {
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
    const { query, loggingIn } = this.props;
    if (loggingIn) return <div style={{ color: 'white' }}>Please wait...</div>;
    return (
      <React.Fragment>

        <Head>
          <title>I'm Danstan ~ Zemuldo</title>
        </Head>
        <div
          className="home-section-background"
          data-stellar-background-ratio="0.6"
        >
          <div className="display-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row">
                  <div style={{ marginTop: '30%' }} className="header-section">
                    <div className="header-frame">
                      <Grid justify="space-between" container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Link>
                            <h1 className="color-6">Twitter</h1>
                          </Link>
                          <hr className="hr-opposite" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Link href={`${api_url}/user/auth/github?redirectTo=${query.redirectTo || base_url}`}>
                            <h1 className="color-6">Github</h1>
                          </Link>
                          <hr />
                        </Grid>
                      </Grid>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Home);
