import React from 'react';
import meta from '../package.json';

export default function VersionInfo() {

  return (
    <div className='version-details'>
      <div>
        <span className='color-1'>@</span>
        <span className='color-6'>Version</span>
        {' : '}
        <span className='color-orange'>{meta.version}</span>
      </div>
      <div>
        <span className='color-1'>@</span>
        <span className='color-6'>Build</span>
        {' : '}
        <span className='color-orange'>
          abcd
        </span>
      </div>
    </div>
  );
}