import { config } from 'bundlib';

export default config({
  name: 'toArray',
  min: ['browser', 'module'],
  equals: true,
  project: './tsconfig.build.json',
});
