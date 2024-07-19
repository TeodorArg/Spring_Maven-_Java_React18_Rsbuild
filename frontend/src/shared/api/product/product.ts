import { apiInstance } from '../base';

import { IProduct } from './types';

const BASE_URL = 'products';

export const getProduct = (id: string): Promise<IProduct> => {
  return apiInstance.get(`${BASE_URL}/${id}`);
};
