import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import darkTheme from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
import lightTheme from 'react-syntax-highlighter/dist/esm/styles/prism/ghcolors';
import CopyCode from './copy_code';
import { useTheme } from '@material-ui/core';

const CodeBlock = (props) => {
  const theme = useTheme();
  const { language, value } = props;
  return (
    <div >
      <div style={{ zIndex: 2, position: 'relative' }}>
        <CopyCode code={value} />
      </div>
      <div  style={{ zIndex: 1, position: 'relative' }}>
        <SyntaxHighlighter
          key={theme.palette.type}
          customStyle={{ paddingTop: '30px', fontWeight: '10px' }}
          language={language}
          style={theme.palette.type === 'dark' ? darkTheme : lightTheme}>
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string
};

export default CodeBlock;