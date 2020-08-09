import React from 'react';
import PageLayout from './PageLayout';

const NoContent = () => {
  return (
    <PageLayout>
      <img
        id="me-pic"
        src="/images/logo/code-ninja.png"
        alt="Danstan Onyango, Zemuldo - Working at home"
      />
      <h1>Something is wrong</h1>
      <h2>I am working on it. Please check again in a few seconds .</h2>
    </PageLayout>
  );
};

export default NoContent;