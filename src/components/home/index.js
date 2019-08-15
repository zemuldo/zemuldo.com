import React from "react";
import Typed from "react-typed";
import Link from "../../Link";
import {type_message} from '../../tools/typed'
import Head from 'next/head';
import SocialSites from './social_sites'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Head>
          <meta charSet="utf-8" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Danstan Onyango, Software Engineer in Nairobi, Kenya." />
          <meta name="author" content="Danstan O. Onyango" />
          <meta name="url" content="https://zemuldo.com" />
          <meta name="copyright" content="Zemuldo" />
          <meta name="robots" content="index,follow" />
          <link rel="shortcut icon" href="images/favicon/fav.png" />
          <link rel="apple-touch-icon" sizes="144x144" type="image/x-icon" href="/static/images/favicon/apple-touch-icon.png" />
          <link rel="stylesheet" type="text/css" href="/static/css/plugin.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/terminal.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/matrix.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700" />
          <meta name="description" content="Danstan Otieno Onyango is a talented Software Developer. Consult Danstan for your next project. Creative and Clean work for the growth and efficiency of your business.  " />
          <meta name="twitter:card" content="https://zemuldo.com/images/favicon/fav.png" />
          <meta name="twitter:site" content="@zemuldo" />
          <meta name="twitter:title" content="Danstan Onyango - Software Engineering, ML, AI & IOT enthusiast" />
          <meta name="twitter:description" content="The official site for Zemyldo,  Danstan Otieno Onyango, a Self-Taught Software Engineer." />
          <meta name="twitter:creator" content="@zemuldo" />
          <meta name="twitter:image" content="https://zemuldo.com/images/favicon/fav.png" />
          <meta name="twitter:domain" content="https://zemuldo.com" />
          <meta name="keywords" content="zemuldo, danstan, software developer, software engineer, linux, nodejs, developer, software, zemuldo.com, developer, programming, coder, nodejs, elixir " />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <section  id="home">
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
                          Blog
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
                      {/*Bash*/}
                      <div className="head-wrap">
                        <div className="text-editor-wrap">
                          <hr />
                          <div className="text-body">
                            <Typed
                              style={{ color: "white" }}
                              strings={type_message()}
                              typeSpeed={120}
                            />
                          </div>
                        </div>
                      </div>
                      {/*End of Bash*/}
                    </div>
                  </div>
                </div>
                {/* Social Media Profiles */}
                <SocialSites/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
