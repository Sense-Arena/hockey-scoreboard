export const isDev = import.meta.env.DEV;
export const BASE_URL = isDev ? 'https://cloud.sensearena.com/crm/dev' : 'https://cloud.sensearena.com/crm/release';
