import React from 'react';
import Head from 'next/head';
import Item from '../components/journey/item';
import Menu from '../components/blog/menu';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import journeys from '../components/journey/journeys.json';
import '../components/journey/journey.css';
import Footer from '../components/footer';

export default function DeveloperStory() {
  return (
    <React.Fragment>
      <Head>
      </Head>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center">
          <Menu/>
        </Grid>
      </Container>
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
      
    </React.Fragment>
  );
}