import React from 'react';
import { Container } from '@material-ui/core';
import Head from 'next/head';
import Entry from '../components/entry';

function PrivacyPolicy() {
  return (
    <Container maxWidth="sm" >
      <Head>
        <title>Zemuldo - Website Privacy Policy</title>
        <meta name="description" content="This page describes the privacy policy that applies to this website. Users of this website expected to read and understand this privacy policy." />
      </Head>
      <div style={{color: 'white'}}>
        <h1>Privacy Policy</h1>

        <br/>

        <p>
          This website does not collect private information except through third party integrations that
          you will be asked to accept. For cookie information store when you visit this site
          please read the <a target="_blank" rel="noopener noreferrer" href='/cookie_policy' >cookie policy</a>.
        </p>
      </div>
    </Container>

  );
}

export default Entry(PrivacyPolicy);