import React, { memo } from 'react';
import { string } from 'prop-types';
import { addShadow } from '../../utils';
import { runtimeConfig } from '../../config';

import './Avatar.css';

function Avatar(props) {
  const { src, srcSet, alt } = props;
  const avatarSize = runtimeConfig.AVATAR_SIZE || null;

  return (
    <img
      className={'avatar' + addShadow()}
      src={src}
      srcSet={srcSet}
      alt={alt}
      style={avatarSize ? { width: avatarSize, height: avatarSize } : {}}
    />
  );
}

export default memo(Avatar);

Avatar.propType = {
  src: string,
  srcSet: string,
  alt: string,
};
