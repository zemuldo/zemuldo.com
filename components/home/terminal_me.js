import React from 'react';
import Typed from 'react-typed';
import { type_message } from '../tools/typed';

const classes = {
  text_editor_wrap: {
    margin: 'auto',
    display: 'block',
    maxWidth: '890px',
    minHeight: '200px',
    borderRadius: '10px',
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
    backgroundColor: 'rgb(23, 23, 23)',
    padding: '10px',
    color: '#f0f0f0',
    textShadow: '#000 0 1px 0',
    fontFamily: 'Consolas, "Courier New", Courier',
    fontSize: '1.2em',
    lineHeight: '1.4em',
    fontWeight: '500',
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

export default function TerminalMe () {
  return (
    <div>
      <div style={classes.text_editor_wrap}>
        <div style={classes.text_body}>
          {process.env.NODE_ENV !== 'test' &&
          <Typed
            style={{ color: 'white' }}
            strings={type_message()}
            typeSpeed={20}
          />}
        </div>
      </div>
    </div>
  );
}
