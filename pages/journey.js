import React from 'react';
import Head from 'next/head';
import Item from '../components/journey/item';
import Menu from '../components/blog/Menu';
import { Container } from '@material-ui/core';
import journeys from '../components/journey/journeys.json';
import Footer from '../components/footer';
import { parseCookies } from 'nookies';
import PropTypes from 'prop-types';
import Entry from '../components/entry';

const api_url = process.env.API_URL;

function DeveloperStory({authorized}) {
  return (
    <>
      <Head>
        <title>Zemuldo - My Software Engineering Journey</title>
        <link href="/css/journey.css" rel="stylesheet" />
        <meta name="description" content="Danstan Onyango ~ Zemuldo, Software Engineer - Nairobi, Kenya, Self Taught. Here is my journey as a Software Engineer all the way to where I am right now." />
      </Head>
      <Menu authorized={authorized} />
      <Container maxWidth="md">
        <div id="content" className="snippet-hidden">
          <div className="journey-wrapper">
            <div className="journey  journey-mine">
              <div className="journey-feed">
                <div className="journey-line" />
                {
                  journeys.map((item) => {
                    return <Item style={{display: 'inline-block'}} {...item} key={`${item.startDate}-${item.endDate}-${item.title}`} />;
                  })
                }
              </div>
              
            </div>
          </div>
        </div>
      </Container>

      <Footer/>
      
    </>
  );
}

DeveloperStory.propTypes = {
  authorized: PropTypes.bool
};

DeveloperStory.getInitialProps = async (ctx) => {
  const { authorization } = parseCookies(ctx);

  return { authorization };
};

export default Entry(DeveloperStory);