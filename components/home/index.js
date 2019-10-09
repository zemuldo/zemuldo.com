import React from 'react';
import Head from 'next/head';
import SocialSites from './social_sites';
import Terminal from './terminal_me';
import CustomLink from '../link';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>I&apos;m Danstan ~ Zemuldo</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zemuldo" />
        <meta name="twitter:creator" content="@zemuldo" />
        <meta name="twitter:title" content="Danstan Onyango - Zemuldo Website" />
        <meta name="twitter:description" content="Danstan Onyango is zemuldo. Software Engineer, Nairobi, Kenya. Passion mixed with enthusiasm and bundled together with Geekiness, served on port Awesomeness." />
        <meta name="twitter:image" content="https://zemuldo.com/static/images/site/site_twitter_card.png" />
        <meta property='og:title' content="I'm Danstan Onyango ~ Zemuldo" />
        <meta property="og:image" content="https://zemuldo.com/static/images/site/site_twitter_card.png" />
        <meta property='og:description' content='Danstan Onyango is zemuldo. Software Engineer, Nairobi, Kenya. Passion mixed with enthusiasm and bundled together with Geekiness, served on port Awesomeness.' />
        <meta property='og:url' content='https://zemuldo.com' />
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
                    <h2>
                      <a href= 'https://safeboda.com' target='_blank' rel="noopener noreferrer">SafeBoda ~ Elixir, P-SQL, JS</a>
                    </h2>
                    <hr />
                    <h4 className="font-c-cn-m">
                      Currently being awesome at SafeBoda and formely at
                      HackerBay Inc.
                    </h4>
                    <h3 className="color-orange">Nairobi, Kenya</h3>
                    <h4 style={{ marginTop: '30px', fontSize: '1.8em' }} className="color-6 font-c-cn-m">
                      <CustomLink href='/journey'>
                        <b>See my journey 🚀🚀</b>
                      </CustomLink>
                    </h4>
                  </div>
                  <div
                    id="me-pic-wrapper"
                    className="img-frame border-color-green"
                  >
                    <img
                      id="me-pic"
                      src="/static/images/logo/black.jpg"
                      alt="Danstan Otieno Onyango, Zemuldo"
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
