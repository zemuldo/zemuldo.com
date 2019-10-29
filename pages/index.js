import React from 'react';
import Home from '../components/home/index';
import Footer from '../components/footer';
import errorHandler from '../components/errorHandler';

function Index() {
  return (
    <React.Fragment>
      <div className='version-details'>
        <div>
          <span className='color-1'>@</span>
          <span className='color-6'>Version</span>
          {' : '}
          <span className='color-orange'> {process.env.VERSION}</span>
        </div>
        <div>
          <span className='color-1'>@</span>
          <span className='color-6'>Build</span>
          {' : '}
          <span className='color-orange'>
            {process.env.GITHUB_SHA.slice(0, 9)}
          </span>
        </div>
        <div className='branch'>
          <span className='color-1'>@</span>
          <span className='color-6'>
            Branch
          </span>
          {' : '}
          <span className='color-orange'>
            {process.env.BRANCH}
          </span>
        </div>
      </div>
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default errorHandler(Index);