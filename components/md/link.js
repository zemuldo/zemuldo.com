import React from 'react';
import PropTypes from 'prop-types';

const isExternal = (href) => href.includes('https://') || href.includes('http://');

function Link (props) {
  if (isExternal(props.href)) {
    return (
      <a 
        className="b-link" 
        rel="noopener noreferrer" target="_blank" 
        href= {props.href} title={props.href}>{props.children}
      </a>
    );
  }
  return (
    <a 
      className="b-link" 
      href= {props.href} title={props.href}>{props.children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Link;