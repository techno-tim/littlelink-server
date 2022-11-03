import { runtimeConfig } from './config';

export function addShadow() {
  let shadow = '';
  switch (runtimeConfig?.DROP_SHADOW) {
    case 'light':
      shadow = ' box-shadow-light';
      break;
    case 'medium':
      shadow = ' box-shadow-medium';
      break;
    case 'heavy':
      shadow = ' box-shadow-heavy';
      break;
    default:
      break;
  }
  return shadow;
}
