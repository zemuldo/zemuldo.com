import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export default function ActiveLink({ children, href }) {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} >
      {children}
    </a>
  );
}

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};