import React from 'react';
import { Container } from '@material-ui/core';
import Head from 'next/head';
import Entry from '../components/entry';

function TermsConditions() {
  return (
    <Container maxWidth="sm" >
      <Head>
        <title>Zemuldo - Attribuitions</title>
        <meta name="description" content="This page describes the cookie terms that applies to this website. Users of this website expected to read and understand this terms." />
      </Head>
      <div>
        <p>
                    The following are used by this website without any modifications.
        </p>
        <h1>Nextjs</h1>

        <p>
                    This website is built and served using <a href='https://nextjs.org/' target='_blank' rel="noopener noreferrer">Nextjs</a>.
        </p>
        <h1>Fonts Awesome</h1>

        <p>
                    This website uses free icons under the free license detailed <a href='https://fontawesome.com/license' target='_blank' rel="noopener noreferrer">Fonts Awesome</a>
        </p>

        <h2>Material UI</h2>

        <p>
                    This website uses UI components from <a target='_blank' rel="noopener noreferrer" href='https://material-ui.com/'>Material UI React</a>
        </p>
      </div>
    </Container>

  );
}

export default Entry(TermsConditions);