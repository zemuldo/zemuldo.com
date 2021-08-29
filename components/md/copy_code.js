import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ShouldRender from '../tools/ShoulRender';

const CopyCode = (props) => {
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(props.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        paddingTop: '8px',
        paddingRight: '15px',
        color: '#08a6f3'
        
      }}
    >
      <span onClick={handleClick} style={{ cursor: 'pointer', fontSize: '18px'}}>
        <ShouldRender condition={!copied} > Copy </ShouldRender>
        <ShouldRender condition={copied} > Copied &#10003; </ShouldRender>
        <span style = {{width: 10, heigh: 10}}></span>
      </span>
    </div>
  );
};

CopyCode.propTypes = {
  code: PropTypes.string.isRequired
};

export default CopyCode;