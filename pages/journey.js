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
    companyDescription: 'Backend Engineer. SafeBoda is a Tech Company based in Uganda with a distributed tech team and using modern tech stacks. My role is exclusively backend engineering using Phoenix Framework and Elixir',
    companyLogo: '/static/images/companies/safeboda.png',
    stacks: [
      { value: 'elixir', label: 'Elixir', color: '#a767f5' },
      { value: 'docker', label: 'Docker', color: '#a767f5' },
      { value: 'es', label: 'Elastic Reach', color: '#a767f5' },
      { value: 'redis', label: 'Redis', color: '#a767f5' },
      { value: 'rabbitmq', label: 'RabbitMQ', color: '#a767f5' },
      { value: 'postgresql', label: 'PostgreSQL', color: 'white' },
      { value: 'heroku', label: 'Heroku', color: 'white' }
    ]
  },
  { template: 'experience' , 
    link: 'https://hackerbay.io', 
    title: 'FullStack Software Engineer',
    startDate: '2018-05-08T00:00:00.000Z',
    endDate: '2019-04-08T00:00:00.000Z',
    companyName: 'HackerBay',
    companyDescription: 'At HackerBay, I was a fully remote FullStack Software Engineer working with a distributed team on products like Fyipe and CloudBoost. ',
    companyLogo: '/static/images/companies/hb.svg',
    stacks: [
      { value: 'nodejs', label: 'NodeJS', color: '#a767f5' },
      { value: 'reactjs', label: 'ReactJS', color: 'white' },
      { value: 'docker', label: 'Docker', color: '#a767f5' },
      { value: 'kubernetes', label: 'Kubernetes', color: '#a767f5' },
      { value: 'mongodb', label: 'MongoDB', color: '#a767f5' },
      { value: 'redis', label: 'Redis', color: '#a767f5' },
      { value: 'storybookjs', label: 'StorybookJS', color: '#a767f5' },
      { value: 'gcp', label: 'Google Cloud', color: '#a767f5' },
    ]
  },
  { template: 'experience' , 
    link: 'https://hackerbayuniversity.com/', 
    title: 'Mentor',
    startDate: '2018-05-08T00:00:00.000Z',
    endDate: '2019-04-08T00:00:00.000Z',
    companyName: 'HackerBay',
    companyDescription: 'Mentoring students to become Professional Software Engineers using the latest technology.',
    companyLogo: '/static/images/companies/hbu.svg',
    stacks: [
      { value: 'nodejs', label: 'NodeJS', color: '#a767f5' },
      { value: 'reactjs', label: 'ReactJS', color: 'white' },
      { value: 'docker', label: 'Docker', color: '#a767f5' },
      { value: 'kubernetes', label: 'Kubernetes', color: '#a767f5' },
      { value: 'gcp', label: 'Google Cloud', color: '#a767f5' }
    ]
  },
  { template: 'experience' , 
    link: 'https://dataintegrated.co.ke', 
    title: 'Lead Software Developer',
    startDate: '2018-05-08T00:00:00.000Z',
    endDate: '2019-04-08T00:00:00.000Z',
    companyName: 'Data Integrated Limited',
    companyDescription: 'As a lead software engineer, I was responsible for leading the tech team and performing CTO roles related to all products.',
    companyLogo: '/static/images/companies/dil.png',
    stacks: [
      { value: 'nodejs', label: 'NodeJS', color: '#a767f5' },
      { value: 'reactjs', label: 'ReactJS', color: 'white' },
      { value: 'docker', label: 'Docker', color: '#a767f5' },
      { value: 'mongodb', label: 'MongoDB', color: '#a767f5' },
      { value: 'rethinkdb', label: 'RethinkDB', color: '#a767f5' },
      { value: 'kubernetes', label: 'Kubernetes', color: '#a767f5' },
      { value: 'gcp', label: 'Google Cloud', color: '#a767f5' },
      { value: 'aws', label: 'AWS Cloud', color: '#a767f5' }
    ]
  },
  { template: 'experience' , 
    link: 'https://dataintegrated.co.ke', 
    title: 'Senior Software Developer',
    startDate: '2018-05-08T00:00:00.000Z',
    endDate: '2019-04-08T00:00:00.000Z',
    companyName: 'Data Integrated Limited',
    companyDescription: 'Roles included GCP Administration and Architecture, Backend Engineering in Nodejs, Frontend Development in ReactJS. The products were real-time dashboards and apis for SaS solutions to businesses.',
    companyLogo: '/static/images/companies/dil.png',
    stacks: [
      { value: 'nodejs', label: 'NodeJS', color: '#a767f5' },
      { value: 'reactjs', label: 'ReactJS', color: 'white' },
      { value: 'docker', label: 'Docker', color: '#a767f5' },
      { value: 'mongodb', label: 'MongoDB', color: '#a767f5' },
      { value: 'rethinkdb', label: 'RethinkDB', color: '#a767f5' },
      { value: 'kubernetes', label: 'Kubernetes', color: '#a767f5' },
      { value: 'gcp', label: 'Google Cloud', color: '#a767f5' },
    ]
  },
  { template: 'experience' , 
    link: 'https://dataintegrated.co.ke', 
    title: 'Junior Software Developer',
    startDate: '2018-05-08T00:00:00.000Z',
    endDate: '2019-04-08T00:00:00.000Z',
    companyName: 'Data Integrated Limited',
    companyDescription: 'I joined Data Integrated as a Junior Developer with no experience in web development. I started out with taking over a REST api backend written in JavaScript.',
    companyLogo: '/static/images/companies/dil.png',
    stacks: [
      { value: 'nodejs', label: 'NodeJS', color: '#a767f5' },
      { value: 'reactjs', label: 'ReactJS', color: 'white' },
      { value: 'docker', label: 'Docker', color: '#a767f5' },
      { value: 'kubernetes', label: 'Kubernetes', color: '#a767f5' },
      { value: 'gcp', label: 'Google Cloud', color: '#a767f5' }
    ]
  },
  { template: 'experience' , 
    link: 'https://impalapay.com', 
    title: 'Junior Software Developer',
    startDate: '2018-05-08T00:00:00.000Z',
    endDate: '2019-04-08T00:00:00.000Z',
    companyName: 'ImpalaPay',
    companyDescription: 'My tasks as a junior included web services integrations in Java and POS application development in C. I also did cloud and local network administration. There was a lot to learn in this episode.',
    companyLogo: '/static/images/companies/impala.png',
    stacks: [
      { value: 'nodejs', label: 'NodeJS', color: '#a767f5' },
      { value: 'reactjs', label: 'ReactJS', color: 'white' },
      { value: 'docker', label: 'Docker', color: '#a767f5' },
      { value: 'kubernetes', label: 'Kubernetes', color: '#a767f5' },
      { value: 'gcp', label: 'Google Cloud', color: '#a767f5' }
    ]
  },
  { template: 'experience' , 
    link: 'https://impalapay.com', 
    title: 'Intern',
    startDate: '2018-05-08T00:00:00.000Z',
    endDate: '2019-04-08T00:00:00.000Z',
    companyName: 'ImpalaPay',
    companyDescription: 'This was my first internship. I did common tasks like wireframes, network troubleshooting. I also tested new POS devices.',
    companyLogo: '/static/images/companies/impala.png',
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