import React from 'react';
import Head from 'next/head';
import JourneyItem from '../components/journey/item';

export default function DeveloperStory() {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/css/journey.css" />
      </Head>       
      <div id="content" className="snippet-hidden">
        <div id="mainbar-full" className="user-show-new developer-story">
          <div className="story-wrapper">
            <div className="story  story-mine">
              <div className="story-feed">
                <div className="story-line" />
                {
                  [1, 2,3, 4, 5, 6, 7, 8].map((item)=>{
                    return <JourneyItem key={item}/>;
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}