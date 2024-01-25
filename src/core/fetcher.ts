import axios from 'axios';
import { BASE_URL } from './constants';

export const AX = axios.create({
  baseURL: `${BASE_URL}`,
});
