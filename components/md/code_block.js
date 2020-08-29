import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';
import CopyCode from './copy_code';

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
      <div >
        <div style={{ zIndex: 2, position: 'relative' }}>
          <CopyCode code={value} />
        </div>
        <div style={{ zIndex: 1, position: 'relative' }}>
          <SyntaxHighlighter customStyle={{paddingTop: '30px'}} language={language} style={theme}>
            {value}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

export default CodeBlock;