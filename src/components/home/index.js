import React from "react";
import Link from "../../Link";
import Head from "next/head";
import SocialSites from "./social_sites";
import Terminal from "./terminal_me";

export default class Home extends React.Component {
  render() {
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
                  <div className="header-section">
                    <div className="header-frame">
                      <h1 className="color-6">Danstan Onyango</h1>
                      <h3>Software Engineer</h3>
                      <hr />
                      <h4 className="font-c-cn-m">
                        Currently being awesome at SafeBoda and formely at
                        HackerBay Inc.
                      </h4>
                      <h3 className="color-orange">Nairobi, Kenya</h3>
                      <br />
                      <Link href="/blog" color="secondary">
                        <h3 className="color-6">Blog</h3>
                      </Link>
                    </div>
                    <div
                      id="me-pic-wrapper"
                      className="img-frame border-color-green"
                    >
                      <img
                        id="me-pic"
                        src="/static/images/logo/black.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <Terminal />
                  </div>
                </div>
              </div>
              <SocialSites />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
