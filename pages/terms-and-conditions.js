import React from 'react';
import { Container } from '@material-ui/core';
import Head from 'next/head';
import Entry from '../components/entry';

function TermsConditions() {
  return (
    <Container maxWidth="sm" >
      <Head>
        <title>Zemuldo - Website Terms and Conditions</title>
        <meta name="description" content="This page describes the cookie terms that applies to this website. Users of this website expected to read and understand this terms." />
      </Head>
      <div>
        <h1>Terms of this Website</h1>

        <p>
          This website is copyrighted to Danstan Otieno Onyango and built for representing and providing information
          about an individual.
        </p>

        <h2>Usage and Purpose</h2>

        <p>
          This site has the primary function of sharing information about me and all knowledge content 
          I wish to share with all visitors. 
          You are allowed to use any content in this website without prior information as long as it does
          degrade the image of the owner, the website itself and public domain. 
          You are allowed to share links to this site on the web.
        </p>
      </div>
    </Container>

  );
}

export default Entry(TermsConditions);