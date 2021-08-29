import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ShouldRender from '../tools/ShoulRender';
import { trackCodeCopy } from '../../api';

const CopyCode = (props) => {
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(props.code);
    setCopied(true);
    trackCodeCopy(props.post_id)
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
      <span style={{ fontSize: '20px'}}>
        <ShouldRender condition={!copied} >
          <span style={{ cursor: 'copy'}} onClick={handleClick}>Click to Copy</span>
        </ShouldRender>
        <ShouldRender condition={copied} >
          <span style={{ cursor: 'default'}}>
            Copied &#10003;
          </span>
        </ShouldRender>
        <span style = {{width: 10, heigh: 10}}></span>
      </span>
    </div>
  );
};

CopyCode.propTypes = {
  code: PropTypes.string.isRequired.apply,
  post_id: PropTypes.string.isRequired
};

export default CopyCode;