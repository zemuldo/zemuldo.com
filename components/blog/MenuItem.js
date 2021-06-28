import PropTypes from 'prop-types';
import React from 'react';

function CustomMenuItem({ children, isActive }) {
  return <span style={isActive ? { borderBottom: '0.2px solid'} : {}}>
    {children}
  </span>;
}

CustomMenuItem.propTypes = {
  children: PropTypes.any,
  isActive: PropTypes.bool,
  themeColor: PropTypes.string
};

export default CustomMenuItem;