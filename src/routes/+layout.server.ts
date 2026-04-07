import { readFileSync } from 'fs';
import { imageSize } from 'image-size';

export const load = () => {
  const { width, height } = imageSize(readFileSync('static/images/pqb-logo.png'));

  return { image: { width: String(width), height: String(height) } };
};
