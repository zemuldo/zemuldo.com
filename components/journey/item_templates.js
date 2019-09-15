import React from 'react';
import PropTypes from 'prop-types';
import { format, formatDistanceStrict } from 'date-fns';

export function Project() {
  return (
    <div id="item-6919178" className="journey-item project github" data-order-by="20190809-000-0006919178">
      <header>
        <span className="journey-item-type">Open source</span>
        <span className="journey-item-date">
          Aug 2017 → Current
          <span>(2 years)</span>
        </span>
      </header>
      <div className="journey-item-content with-description">
        <div className="img logo" />
        <div className="journey-item-text">
          <div className="journey-item-title">
            <a href="https://github.com/zemuldo/iso_8583" rel="nofollow">zemuldo/iso_8583</a>
          </div>
          <div className="-commits _last">Last commit on Jul 10, 19</div>
          <div className="-commits">
            <span>267 Commits / </span>
            <span className="-additions">41,318 ++ </span>
            <span>/</span>
            <span className="-deletions">17,620 --</span>
          </div>
          <div className="journey-item-paragraph">
            <div className="description">
              <span className="description-content-full">
                <p>:credit_card::moneybag: JavaScript library for iso 8583
                 messaging. Handles message validation &amp; conversion between
                 interfaces using iso 8583 standard. Contributors are welcome.
                </p>
              </span>
              <label className="description-expander-label" htmlFor="item-6919178-collapsible-description" data-less="Less" data-more="Read more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export function Experience({details}) {
  return (
    <div id="item-6904780" className="journey-item job" data-order-by="20190809-002-0006904780">
      <header>
        <span className="journey-item-type">Joined</span>
        <span className="journey-item-date">
          <span>
            {` ${format(new Date(details.startDate), 'LLLL, yyyy')}`} → {details.endDate? format(new Date(details.endDate), 'LLLL, yyyy'): 'Current'}
          </span>
          <span>{` ~ ${formatDistanceStrict(new Date(details.startDate), new Date(details.endDate || new Date()))}`}</span>
        </span>
      </header>
      <div className="journey-item-content with-description">
        <div className="js-listcard-container" />
        <div className="g-center img logo logo-blank js-logo-blank dno align-self js-listcard-hover" data-list-url="/users/story/lists/60269/safeboda?storyType=1">
          <svg aria-hidden="true" className="svg-icon iconIndustry" width={18} height={18} viewBox="0 0 18 18">
            <path d="M10 16v-4H8v4H2V4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8h-6zM4 4v2h2V4H4zm0 4v2h2V8H4zm4-4v2h2V4H8zm0 4v2h2V8H8zm-4 4v2h2v-2H4zm8 0v2h2v-2h-2zm0-4v2h2V8h-2z" />
          </svg>
        </div>
        <div className="img logo align-self js-listcard-hover" data-list-url="/users/story/lists/60269/safeboda?storyType=1">
          <a target='_blank' rel='noopener noreferrer' href={details.link}>
            <img src={details.companyLogo} alt="SafeBoda" className="js-list-img" data-list-id={60269} />
          </a>
          
        </div>
        <div className="journey-item-text">
          <div className="journey-item-title">
            <h4>{details.title}</h4> 
            <span className="js-listcard-hover" data-list-url="/users/story/lists/60269/safeboda?storyType=1">
              <a target='_blank' rel='noopener noreferrer' href={details.link}>{details.companyName}</a>
            </span>
          </div>
          <div>
            <h4>Tech Stack</h4> 
            {
              details.stacks.map((entry)=>{
                return <button key={entry.value} className="post-tag">{entry.label}</button>;
              })
            }
          </div>
          <div className="journey-item-paragraph">
            <div className="description">
              <span className="description-content-full">
                <p>{details.companyDescription}</p>
              </span>
              <label className="description-expander-label" htmlFor="item-6904780-collapsible-description" data-less="Less" data-more="Read more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

Experience.propTypes = {
  details: PropTypes.object.isRequired
};