import { apiInstance } from '../base';
import { IProducts } from './types';

const BASE_URL = '/products';

export const getProducts = (): Promise<IProducts> => {
  return apiInstance.get(`${BASE_URL}`);
};
