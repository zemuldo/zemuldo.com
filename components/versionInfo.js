import React from 'react';

export default function VersionInfo(){
  return (<div className='version-details'>
    <div>
      <span className='color-1'>@</span>
      <span className='color-6'>Version</span>
      {' : '}
      <span className='color-orange'> {process.env.VERSION}</span>
    </div>
    <div>
      <span className='color-1'>@</span>
      <span className='color-6'>Build</span>
      {' : '}
      <span className='color-orange'>
        {process.env.GITHUB_SHA.slice(0, 9)}
      </span>
    </div>
  </div>);
}