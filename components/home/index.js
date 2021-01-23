import React from 'react';
import SocialSites from './social_sites';
import Terminal from './terminal_me';
import CustomLink from '../link';
import CurrentCompany from './current_company';

export default function Home() {
  return (
    <>
      <div
        className="home-section-background"
        data-stellar-background-ratio="0.6"
      >
        <div className="display-table">
          <div  className="display-table-cell">
            <div className="container">
              <div className="row">
                <div>
                  <div itemProp="founder" itemScope itemType="http://schema.org/Person">
                    <h1 itemProp="name" className="color-6">Danstan Onyango</h1>
                  </div>
                  <h2 style={{ fontSize: '26px' }}>Software Engineer</h2>
                  <hr className='hr-red-gradient' style={{ marginTop: '-10px' }} />
                </div>
                <div className="header-section" style={{marginTop: '-25px'}}>
                  <div style={{ paddingLeft: '5px',  }} className="header-frame">
                    <h3 className="font-c-cn-m" style={{ lineHeight: '150%', marginTop: '-5px' }}>
                      <p>Loves Functional Programming and Developing Distributed Systems. Curious, Peculiar. Chess.</p>
                      <p>
                        Fully Self Taught. Enjoys creating technical content and mentoring. See my {' '}
                        <CustomLink href='/blog'>
                           Blog
                        </CustomLink>.
                      </p>
                      <CurrentCompany/>
                      See my {' '}
                      <CustomLink href='/journey'>
                          Journey
                      </CustomLink>
                      <span>.</span>
                    </h3>
                  </div>
                  <div
                    id="me-pic-wrapper"
                    className="img-frame"
                  >
                    <img
                      id="me-pic"
                      style={{borderRadius: '50%'}}
                      src="/images/logo/me.jpg"
                      alt="Danstan Onyango, Zemuldo - Working at home"
                    />
                  </div>
                </div>
                <div style={{ paddingLeft: '5px', marginTop: '-20px' }}>
                  <hr className='hr-red-gradient'/>
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
