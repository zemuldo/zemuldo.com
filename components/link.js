import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export default function CustomLink({ children, href, target, rel }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  
  if (href && href.includes('http'))
    return (
      <a target={target} rel={rel} href={href}>
        {children}
      </a>
    );

  if (target){
    return (
      <a target={target} rel={rel} href={href} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <a rel={rel} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};
