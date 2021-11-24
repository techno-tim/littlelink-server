import React, { memo } from 'react';
import { string, number, object } from 'prop-types';
import { trackGoogleEvent } from '../../analytics/google';
import { runtimeConfig } from '../../config';
import { trackUmamiEvent } from '../../analytics/umami';

function Button(props) {
  const { name, href, displayName, logo, styles } = props;

  const handleClick = () => {
    const eventName = `${name}-button`;

    if (runtimeConfig?.GA_TRACKING_ID) {
      trackGoogleEvent(eventName);
    }
    if (runtimeConfig?.UMAMI_WEBSITE_ID && runtimeConfig?.UMAMI_APP_URL) {
      trackUmamiEvent(eventName);
    }
  };

  return (
    <>
      <a
        className={styles ? 'button' : `button button-${name}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        style={styles ? styles : undefined}
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
  alt: string.isRequired,
  displayName: string.isRequired,
  href: string.isRequired,
  name: string.isRequired,
  order: number.isRequired,
  logo: string,
  styles: object,
};
