import { apiInstance } from '../base';

import { IItem } from './types';

const BASE_URL = 'items';

export const getItem = (id: string): Promise<IItem> => {
  return apiInstance.get(`${BASE_URL}/${id}`);
};

export const deleteItem = (id: string): Promise<IItem> => {
  return apiInstance.delete(`${BASE_URL}/${id}`);
};
