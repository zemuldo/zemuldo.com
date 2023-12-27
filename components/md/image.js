import React, { useState } from 'react';
import PropTypes from 'prop-types';
const { STATIC_IMAGES_URL } = process.env;

function Image({ src, alt }) {
  const _style = { minWidth: '100%', position: 'absolute', left: '0', right: '0', zIndex: 24 }; 
  const [zoom, zoomUp] = useState(null);

  const handleZoom = () => {
    if (zoom) zoomUp(null);
    else zoomUp(_style);
  };
  return (
    <>
      <img onClick={handleZoom} style={{ ...zoom, cursor: !zoom ? 'zoom-in' : 'zoom-out' }} src={src.replace('https://zemuldo.com/z-site-images', STATIC_IMAGES_URL)} alt={alt} />
    </>
  );
}

Image.displayName = 'Image';

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
