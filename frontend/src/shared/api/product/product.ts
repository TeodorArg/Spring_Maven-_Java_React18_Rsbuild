import { apiInstance } from '../base';

import { IProduct } from './types';

const BASE_URL = '/products';

export const getProduct = (id: string): Promise<IProduct> => {
  return apiInstance.getWithProduct(`${BASE_URL}/${id}`);
};

export const deleteProduct = (id: string): Promise<IProduct> => {
  return apiInstance.deleteWithProduct(`${BASE_URL}/${id}`);
};

export const editProduct = (
  id: string,
  productData: IProduct,
): Promise<IProduct> => {
  return apiInstance.putWithProduct(`${BASE_URL}/${id}`, productData);
};
