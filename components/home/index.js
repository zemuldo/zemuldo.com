import React from 'react';
import SocialSites from './social_sites';
import Terminal from './terminal_me';
import CustomLink from '../link';

export default function Home() {
  return (
    <React.Fragment>
      <div
        className="home-section-background"
        data-stellar-background-ratio="0.6"
      >
        <div className="display-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="header-section">
                  <div style={{ paddingLeft: '5px' }} className="header-frame">
                    <div itemProp="founder" itemScope itemType="http://schema.org/Person">
                      <h1 itemProp="name" className="color-6">Danstan Onyango</h1>
                    </div>
                    <h2 style={{ fontSize: '26px' }}>Software Engineer</h2>
                    <hr />
                    <h3 className="font-c-cn-m">
                      <span>Currently being awesome at</span>
                      <span itemScope itemProp="organization" itemType="http://schema.org/Organization">
                        <a itemProp="url" className="color-6" href="https://safeboda.com" target="_blank" rel="noopener noreferrer">
                          <span itemProp="name"> SafeBoda </span>
                        </a>
                      </span>
                      <span> and formely at </span>
                      <span itemScope itemProp="organization" itemType="http://schema.org/Organization">
                        <a itemProp="url" className="color-6" href="https://hackerbay.io/" target="_blank" rel="noopener noreferrer">
                          <span itemProp="name"> HackerBay Inc. </span>
                        </a>
                      </span>
                    </h3>
                    <h4 style={{ fontSize: '26px' }} className="color-orange">Nairobi, Kenya</h4>
                    <h4 style={{ marginTop: '30px', fontSize: '1.8em' }} className="color-6 font-c-cn-m">
                      <CustomLink href='/journey'>
                        <b>See my journey 🚀🚀🚀</b>
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
