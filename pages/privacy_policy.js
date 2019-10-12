import React from 'react';
import { Container } from '@material-ui/core';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <Container maxWidth="sm" >
      <Head>
        <title>Zemuldo - Privacy Policy</title>
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