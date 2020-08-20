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
    <div>
      <span onClick= {handleClick} style={{float: 'right', marginLeft: '-80px', marginTop: '2px', cursor: 'pointer'}}>
        {!copied && <FileCopyIcon color= 'primary' style={{fill: '#FAFAFA'}}/>}
        {copied && <CheckCircleIcon color= 'primary' style={{fill: '#2E6B22'}}/>}
      </span>
    </div>
  );
};

CopyCode.propTypes = {
  code: PropTypes.string.isRequired
};

export default CopyCode;