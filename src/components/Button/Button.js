import React, { memo } from 'react';
import { string } from 'prop-types';
import { trackEvent } from '../../analytics/google';
import { runtimeConfig } from '../../config';

function Button(props) {
  const { name, href, displayName, logo } = props;

  const handleClick = () => {
    if (runtimeConfig?.GA_TRACKING_ID) {
      trackEvent('click', 'social', name, 1);
    }
  };

  return (
    <>
      <a
        className={`button button-${name}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {logo && (
          <img className="icon" src={logo} alt={`${displayName} logo`} />
        )}

        {displayName}
      </a>
    </>
  );
}

export default memo(Button);

Button.propType = {
  src: string.isRequired,
  srcSet: string,
  alt: string.isRequired,
  href: string,
  name: string,
};
