import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getItem, deleteItem } from '@/shared/api/item';


// Кастомный хук для получения данных элемента
export const useGetItemById = (id: string) => {
  const query = useQuery({
    queryKey: ['itemData', id],
    queryFn: () => getItem(id),
  });

  return query;
};


// Кастомный хук для удаления элемента
export const useDeleteItemById = (itemID: string) => {
  const queryClient = useQueryClient(); // Перемещаем вызов useQueryClient сюда
  const mutation = useMutation({
    mutationFn: () => deleteItem(itemID),
    onSuccess: () => 
      queryClient.invalidateQueries({ queryKey: ['itemsListData'] })
  });

  return mutation;
};