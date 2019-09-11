import React from "react";
import Head from "next/head";
import Grid from "@material-ui/core/Grid"
import { Link } from "next/link";

const JoinNow = () => (
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
                                    <Link href="/blog/login" as="/blog/login?redirectTo=http://localhost:3000/blog/write/new" >
                                        <a className="color-6">
                                            Join with Github
                                                </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default JoinNow
