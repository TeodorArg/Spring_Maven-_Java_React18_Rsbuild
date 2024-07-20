import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getItem, deleteItem, editItem, IItem } from '@/shared/index';


// Кастомный хук для получения данных товара по id
export const useGetItemById = (id: string) => {
  const query = useQuery({
    queryKey: ['itemData', id],
    queryFn: () => getItem(id),
  });

  return query;
};


// Кастомный хук для удаления товара
export const useDeleteItemById = (itemID: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteItem(itemID),
    onSuccess: () => 
      queryClient.invalidateQueries({ queryKey: ['itemsListData'] })
  });

  return mutation;
};

// Кастомный хук для редактирования товара
export const useUpdateItemById = (itemID: string, itemData: IItem) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => editItem(itemID, itemData),
    onSuccess: () => 
      queryClient.invalidateQueries({ queryKey: ['itemsListData'] })
  });

  return mutation;
};