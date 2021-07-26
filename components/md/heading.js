import React from 'react';
import PropTypes from 'prop-types';

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function H1(props) {
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = text.toLowerCase().replace(/\W/g, '-');
  const h = React.createElement('h' + props.level, { id: slug }, props.children);
  return <a className='dead-a' onClick={(e) => {
    e.preventDefault();
  }} href={`${props.href}#${slug}` }>{ h}</a>
}

H1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  level: PropTypes.number.isRequired,
  href: PropTypes.string,
};

export default H1;
