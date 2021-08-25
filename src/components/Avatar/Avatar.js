import React from 'react';
import { string } from 'prop-types';

import './Avatar.css';

function Avatar(props) {
  const { src, srcSet, alt } = props;

  return (
    <img id="avatar" className="avatar" src={src} srcSet={srcSet} alt={alt} />
  );
}

export default Avatar;

Avatar.propType = {
  src: string,
  srcSet: string,
  alt: string,
};
