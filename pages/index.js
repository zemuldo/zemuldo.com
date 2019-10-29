import React from 'react';
import Home from '../components/home/index';
import Footer from '../components/footer';
import errorHandler from '../components/errorHandler';

function Index() {
  return (
    <React.Fragment>
      <Home/>
      <Footer/>
    </React.Fragment>
  );
}

export default errorHandler(Index);