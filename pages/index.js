import React from 'react';
import Home from '../components/home/index';
import Footer from '../components/footer';
import errorHandler from '../components/errorHandler';

function Index() {
  return (
    <React.Fragment>
      <div className='version-details'>
          <div>@Version: {process.env.VERSION}</div>
          <div>@Build: {process.env.GITHUB_SHA.slice(0, 9)}</div>
          <div className='branch'>@Branch: {process.env.BRANCH}</div>
        </div>
      <Home/>
      <Footer/>
    </React.Fragment>
  );
}

export default errorHandler(Index);