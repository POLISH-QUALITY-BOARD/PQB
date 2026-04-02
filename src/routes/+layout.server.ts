import { imageSize } from 'image-size';
import { readFileSync } from 'fs';
import { asset } from '$app/paths';

export const load = ({ url }) => {
  const { width, height } = imageSize(readFileSync('static/images/pqb-logo.png'));
  const { href: imageUrl } = new URL(asset('/images/pqb-logo.png'), url.origin);

  return {
    image: {
      url: imageUrl,
      width: String(width),
      height: String(height)
    }
  };
};
