import React from "react";
import Head from "next/head";
import Grid from "@material-ui/core/Grid"
import { Link } from "@material-ui/core";
import { withRouter } from 'next/router'

const api_url = process.env.API_URL
const base_url = process.env.BASE_URL

class Home extends React.Component {
    static getInitialProps({query}) {
        return {query}
      }
    
    render() {
        const {query} = this.props
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
                                    <div style={{ marginTop: "30%" }} className="header-section">
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

export default withRouter(Home)
