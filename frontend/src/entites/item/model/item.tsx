import { useQuery } from '@tanstack/react-query';
import { getItem } from '@/shared/api/item';

export const itemQuery = (id: string) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['itemData', id],
    queryFn: () => getItem(id),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  // Возвращаем данные, если они есть
  return data;
};
