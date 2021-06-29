import { useTheme } from '@material-ui/styles';
import React from 'react';
import Typed from 'react-typed';
import { type_message } from '../tools/typed';

const classes = {
  text_editor_wrap: {
    padding: '10px',
    marginTop: '20px',
    display: 'block',
    maxWidth: '900px',
    minHeight: '200px',
    borderRadius: '7px',
    clear: 'both',
    overflow: 'hidden',
    WebkitTransition: 'all .5s ease-out',
    MozTransition: 'all .5s ease-out',
    MsTransition: 'all .5s ease-out',
    OTransition: 'all .5s ease-out',
    transition: 'all .5s ease-out'
  },
  text_body: {
    height: 'auto',
    padding: '4px',
    fontFamily: 'Consolas, "Courier New", Courier',
    fontSize: '1.0em',
    lineHeight: '1.4em',
    fontWeight: '600',
    textAlign: 'left',
    overflow: 'hidden',
    WebkitTransition: 'all .5s ease-out',
    MozTransition: 'all .5s ease-out',
    MsTransition: 'all .5s ease-out',
    OTransition: 'all .5s ease-out',
    transition: 'all .5s ease-out'
  },
  typed: { color: 'green' }
};

export default function TerminalMe() {
  const theme = useTheme();
  return (
    <div>
      <div style={{...classes.text_editor_wrap}}>
        <div style={classes.text_body}>
          {process.env.NODE_ENV !== 'test' &&
          <Typed
            strings={type_message(theme)}
            typeSpeed={10}
          />}
        </div>
      </div>
    </div>
  );
}
