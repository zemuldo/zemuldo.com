import React from 'react';
import PropTypes from 'prop-types';

function Image ({src, alt}) {
  return <img src={src} alt={alt} className='b-img' />;
}

Image.displayName = 'Image';

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
