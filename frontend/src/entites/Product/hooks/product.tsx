import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct, editProduct, getProduct, IProduct } from '@/shared/index';

// Кастомный хук для получения данных товара по id
export const useGetProductById = (id: string) => {
  const query = useQuery({
    queryKey: [`productData-${id}`, id],
    queryFn: () => getProduct(id),
  });

  return query;
};

// Кастомный хук для удаления товара
export const useDeleteProductById = (itemID: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteProduct(itemID),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['productsListData'] }),
  });

  return mutation;
};

// Кастомный хук для редактирования товара
export const useUpdateProductById = (itemID: string, itemData: IProduct) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => editProduct(itemID, itemData),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['productsListData'] }),
  });

  return mutation;
};
