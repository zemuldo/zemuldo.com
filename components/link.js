import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export default function CustomLink({ children, href, target, rel, style }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  
  if ((href && href.includes('http')) || target)
    return (
      <a style={style} target={target} rel={rel} href={href}>
        {children}
      </a>
    );

  if (target){
    return (
      <a style={style} target={target} rel={rel} href={href} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <a style={style} rel={rel} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object
};
