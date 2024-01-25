import { isDev } from './constants';

export const wrapAsset = (src: string) => (isDev ? src : `https://sense-arena.github.io/hockey-scoreboard${src}`);
