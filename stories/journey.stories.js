import React from 'react';
import { storiesOf } from '@storybook/react';
import Journey from '../pages/journey';
import {Experience} from '../components/journey/item_templates';

const experience =  {
  'template': 'experience',
  'link': 'https://dataintegrated.co.ke',
  'title': 'Lead Software Developer',
  'startDate': '2018-01-08T00:00:00.000Z',
  'endDate': '2019-04-08T00:00:00.000Z',
  'companyName': 'Data Integrated Limited',
  'companyDescription': 'As a lead software engineer, I was responsible for leading the tech team and performing CTO roles related to all products.',
  'companyLogo': '/images/companies/dil.png',
  'stacks': [
    { 'value': 'nodejs', 'label': 'NodeJS', 'color': '#a767f5' },
    { 'value': 'reactjs', 'label': 'ReactJS', 'color': 'white' },
    { 'value': 'docker', 'label': 'Docker', 'color': '#a767f5' },
    { 'value': 'mongodb', 'label': 'MongoDB', 'color': '#a767f5' },
    { 'value': 'rethinkdb', 'label': 'RethinkDB', 'color': '#a767f5' },
    { 'value': 'kubernetes', 'label': 'Kubernetes', 'color': '#a767f5' },
    { 'value': 'gcp', 'label': 'Google Cloud', 'color': '#a767f5' },
    { 'value': 'aws', 'label': 'AWS Cloud', 'color': '#a767f5' }
  ]
};

storiesOf('Journey', module)
  .add('Journey', () => (
    <Journey details={experience}/>
  ))
  .add('Experience', () => (
    <div style={{margin: '10%'}}>
      <Experience details={experience}/>
    </div>
  ));
