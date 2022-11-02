import React, { memo } from 'react';
import { string } from 'prop-types';
import { addShadow } from '../../utils';

import './Avatar.css';

function Avatar(props) {
  const { src, srcSet, alt } = props;

  return (
    <img
      className={'avatar' + addShadow()}
      src={src}
      srcSet={srcSet}
      alt={alt}
    />
  );
}

export default memo(Avatar);

Avatar.propType = {
  src: string,
  srcSet: string,
  alt: string,
};
