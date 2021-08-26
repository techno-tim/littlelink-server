import React from 'react';
import { string } from 'prop-types';

function Button(props) {
  const { name, href, displayName, logo } = props;

  return (
    <>
      <a
        className={`button button-${name}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {logo && (
          <img className="icon" src={logo} alt={`${displayName} logo`} />
        )}

        {displayName}
      </a>
    </>
  );
}

export default Button;

Button.propType = {
  src: string.isRequired,
  srcSet: string,
  alt: string.isRequired,
  href: string,
};
