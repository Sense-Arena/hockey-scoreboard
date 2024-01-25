import { isDev } from './constants';

export const wrapAsset = (src: string) => (isDev ? src : `https://sensearena.github.io/hockey-scoreboard${src}`);
