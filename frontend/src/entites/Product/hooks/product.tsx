import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  deleteProduct,
  editProduct,
  getProduct,
  IProduct,
} from '@/shared/index';

// Кастомный хук для получения данных товара по id
export const useGetProductById = (productID: string) => {
  const query = useQuery({
    queryKey: [`productData-${productID}`, productID],
    queryFn: () => getProduct(productID),
  });

  return query;
};

// Кастомный хук для удаления товара
export const useDeleteProductById = (productID: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteProduct(productID),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['productsListData'] }),
  });

  return mutation;
};

// Кастомный хук для редактирования товара
export const useUpdateProductById = (productID: string, itemData: IProduct) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => editProduct(productID, itemData),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['productsListData'] }),
  });

  return mutation;
};
