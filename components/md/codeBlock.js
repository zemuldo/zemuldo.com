import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import  theme from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
import CopyCode from './CopyCode';

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <div>
        <CopyCode code={value}/>
        <SyntaxHighlighter language={language} style={theme}>
          {value}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default CodeBlock;