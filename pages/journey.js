import React from 'react';
import Head from 'next/head';
import Item from '../components/journey/item';
import Menu from '../components/blog/menu';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import '../components/journey/journey.css';
const journies = [
  { template: 'experience' , 
    link: 'https://safeboda.com', 
    title: 'Software Engineer',
    startDate: '2019-04-08T00:00:00.000Z',
    companyName: 'SafeBoda',
    companyDescription: 'Backend Engineer. SafeBoda is a Tech Company based in Uganda with a distributed tech team and using modern tech stacks.',
    companyLogo: '/static/images/companies/safeboda.png',
    stacks: [
      { value: 'elixir', label: 'Elixir', color: '#a767f5' },
      { value: 'postgresql', label: 'PostgreSQL', color: 'white' }
    ]
  },
  { template: 'experience' , 
    link: 'https://safeboda.com', 
    title: 'Software Engineer',
    startDate: '2019-04-08T00:00:00.000Z',
    companyName: 'SafeBoda',
    companyDescription: 'Backend Engineer. SafeBoda is a Tech Company based in Uganda with a distributed tech team and using modern tech stacks.',
    companyLogo: '/static/images/companies/safeboda.png',
    stacks: [
      { value: 'elixir', label: 'Elixir', color: '#a767f5' },
      { value: 'postgresql', label: 'PostgreSQL', color: 'white' }
    ]
  },
  { template: 'experience' , 
    link: 'https://hackerbay.io', 
    title: 'FullStack Software Engineer',
    startDate: '2018-05-08T00:00:00.000Z',
    endDate: '2019-04-08T00:00:00.000Z',
    companyName: 'HackerBay',
    companyDescription: 'I was a remote Software Engineer at HackerBay.',
    companyLogo: '/static/images/companies/hb.svg',
    stacks: [
      { value: 'nodejs', label: 'NodeJS', color: '#a767f5' },
      { value: 'reactjs', label: 'ReactJS', color: 'white' },
      { value: 'docker', label: 'Docker', color: '#a767f5' },
      { value: 'kubernetes', label: 'Kubernetes', color: '#a767f5' },
      { value: 'gcp', label: 'Google Cloud', color: '#a767f5' }
    ]
  }
];

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
          <div id="mainbar-full" className="user-show-new developer-journey">
            <div className="journey-wrapper">
              <div className="journey  journey-mine">
                <div className="journey-feed">
                  <div className="journey-line" />
                  {
                    journies.map((item) => {
                      return <Item style={{display: 'inline-block'}} {...item} key={item.template} />;
                    })
                  }
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </Container>
      
    </React.Fragment>
  );
}