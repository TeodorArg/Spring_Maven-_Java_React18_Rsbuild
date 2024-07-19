import { apiInstance } from '../base';
import { IItems } from './types';

const BASE_URL = '/items';

export const getItems = (): Promise<IItems> => {
  return apiInstance.get(`${BASE_URL}`);
};
