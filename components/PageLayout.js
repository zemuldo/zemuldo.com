import React from 'react';
import PropTypes from 'prop-types';

const PageLayout = (props) => {
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
                  <div style={props.style || {}} className="header-frame">
                    {props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.object.isRequired,
  style: PropTypes.object
};

export default PageLayout;