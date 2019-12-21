import React from 'react';
import PropTypes from 'prop-types';

function Link (props) {
  return <a className="b-link" rel="noopener noreferrer" target="_blank" href= {props.href} title={props.href}>{props.children}</a>;
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Link;