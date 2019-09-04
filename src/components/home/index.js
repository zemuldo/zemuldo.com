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
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@zemuldo" />
          <meta name="twitter:creator" content="@zemuldo" />
          <meta name="twitter:title" content="Danstan Onyango - Zemuldo Website" />
          <meta name="twitter:description" content="The personal website and blog for User @zemuldo. An enthusiastic Geek Freak of Code #Elixir #SQL #NodeJS #ReactJS" />
          <meta name="twitter:image" content="https://zemuldo.com/static/images/site/site_twitter_card.png" />
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
