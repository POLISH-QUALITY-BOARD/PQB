import { imageSize } from 'image-size';
import { readFileSync } from 'fs';

export const load = () => {
  const { width, height } = imageSize(readFileSync('static/images/PQB-logo.png'));

  return { image: { width: String(width), height: String(height) } };
};
