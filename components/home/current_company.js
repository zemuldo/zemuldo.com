import React from 'react';

export default function CurrentCompany() {
  return (
    <p >
      <span >Program Manager at {' '} </span>
      
      <span
        itemScope
        itemProp="organization"
        itemType="http://schema.org/Organization"
      >
        <a
          style={{backgroundColor: 'transparent', opacity: .9}}
          itemProp="url"
          href="https://microsoft.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span  itemProp="name">
            <span style={{color: '#F26522'}}>Micr</span>
            <span style={{color: '#FFC20E'}}>o</span>
            <span style={{color: '#8DC63F'}}>Sof</span>
            <span style={{color: '#00AEEF'}}>t</span>
          </span>
        </a>
      </span>
      <span>.</span>
    </p>
  );
}
