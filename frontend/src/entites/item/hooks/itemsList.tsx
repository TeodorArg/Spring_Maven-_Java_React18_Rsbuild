import { useQuery } from '@tanstack/react-query';
import { getItems } from '@/shared/api/items';

export const useItemsListQuery = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['itemsListData'],
    queryFn: getItems,
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  // Возвращаем данные, если они есть
  return data;
};
