import React from 'react';
import SocialSites from './social_sites';
import Terminal from './terminal_me';
import CustomLink from '../link';

export default function Home() {
  return (
    <>
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
                    <hr style={{ marginTop: '-10px' }} />
                    <h3 className="font-c-cn-m" style={{ lineHeight: '150%', marginTop: '-5px' }}>
                      <p>Loves functional programming and Currently open to a new exciting adventure.</p>
                      <p>
                        <span>Formerly at </span>
                        <b itemScope itemProp="organization" itemType="http://schema.org/Organization">
                          <a itemProp="url" className="color-orange" href="https://safeboda.com" target="_blank" rel="noopener noreferrer">
                            <span itemProp="name"> SafeBoda</span>
                          </a>
                        </b>
                        <span>.</span>
                      </p>
                    </h3>
                  </div>
                  <div
                    id="me-pic-wrapper"
                    className="img-frame"
                  >
                    <img
                      id="me-pic"
                      src="/images/logo/code-ninja.png"
                      alt="Danstan Onyango, Zemuldo - Working at home"
                    />
                  </div>
                </div>
                <div style={{ paddingLeft: '5px' }}>
                  <h4 style={{ marginTop: '30px', fontSize: '1.8em' }} className="color-6 font-c-cn-m">
                    <CustomLink href='/journey'>
                      <b>See my journey 🚀🚀 </b>
                    </CustomLink>
                    <span style={{ color: 'white' }}> Or </span>
                    <CustomLink href='/blog'>
                      <b>My Tech Blog 📚📚</b>
                    </CustomLink>
                  </h4>
                </div>
                <div style={{ paddingLeft: '5px' }}>
                  <hr />
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
    </>
  );
}
