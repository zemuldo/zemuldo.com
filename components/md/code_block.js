import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import darkTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';
import lightTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/ghcolors';
import CopyCode from './copy_code';
import { useTheme } from '@material-ui/core';
import ShouldRender from '../tools/ShoulRender';

const CodeBlock = (props) => {
  const theme = useTheme();
  const { language, value } = props;
  const [showCopy, setShowCopy] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowCopy(true)}
      onMouseLeave={() => setShowCopy(false)}
    >
      <div style={{ zIndex: 2, position: 'relative' }}>
        <ShouldRender condition={showCopy}>
          <CopyCode post_id={props.post_id} code={value} />
        </ShouldRender>
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
  post_id: PropTypes.string.isRequired,
  language: PropTypes.string
};

export default CodeBlock;