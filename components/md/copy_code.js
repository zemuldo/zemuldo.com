import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const CopyCode = (props) =>{
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(props.code);
    setCopied(true);
    setTimeout(()=> setCopied(false), 1500);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', padding: '1px', marginBottom: '-40px' }} >
      <span onClick= {handleClick} style={{cursor: 'pointer',}}>
        {!copied && <FileCopyIcon fontSize="small" />}
        {copied && <CheckCircleIcon fontSize="small" />}
      </span>
    </div>
  );
};

CopyCode.propTypes = {
  code: PropTypes.string.isRequired
};

export default CopyCode;