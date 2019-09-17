import React from 'react';
import PropTypes from 'prop-types';
import { format, formatDistanceStrict } from 'date-fns';

export function Project({details}) {
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
Project.propTypes = {
  details: PropTypes.object.isRequired
};

export function Experience({ details }) {
  return (
    <div className="journey-item job">
      <header>
        <span className="journey-item-type">Joined</span>
        <span className="journey-item-date">
          <span>
            {` ${format(new Date(details.startDate), 'LLLL, yyyy')}`} → {details.endDate ? format(new Date(details.endDate), 'LLLL, yyyy') : 'Current'}
          </span>
          <span>{` ~ ${formatDistanceStrict(new Date(details.startDate), new Date(details.endDate || new Date()))}`}</span>
        </span>
      </header>
      <div className="journey-item-content with-description">
        <div className="img logo align-self js-listcard-hover">
          <a target='_blank' rel='noopener noreferrer' href={details.link}>
            <img src={details.companyLogo} alt="SafeBoda" className="js-list-img" data-list-id={60269} />
          </a>
        </div>
        <div className="journey-item-text">
          <div className="journey-item-title">
            <h4>{details.title}</h4>
            <span className="js-listcard-hover">
              <a target='_blank' rel='noopener noreferrer' href={details.link}>{details.companyName}</a>
            </span>
          </div>
          <div>
            <h4>Tech Stack</h4>
            <div className='stacks'>
              {
                details.stacks.map((entry) => {
                  return <div style={{ float: 'left' }} key={entry.value} >
                    <span className='color-6'>{` ${entry.label} `}</span>
                    <span className='separator'>,</span>
                  </div>;
                })
              }

            </div>
            <br className="clearBoth" />
          </div>
         
        </div>
      </div>
      <div className="journey-item-paragraph">
        <div className="description">
          <span className="description-content-full">
            <p>{details.companyDescription}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
Experience.propTypes = {
  details: PropTypes.object.isRequired
};