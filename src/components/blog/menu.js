import React from 'react';
import Link from 'next/link';


export default function Menu() {

  return (
    <div style={{margin: '10px 0px 10px 0px', }}>
      <h3>
        <Link href="/">
          <a style={{color: 'white'}}>HOME</a>
        </Link>
      </h3>
    </div>
  );
}
