import { useQuery } from '@tanstack/react-query';
import { getProduct } from '@/shared/api/product';

// Модифицируем функцию, чтобы она принимала id
export const itemQuery = (id: string) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['itemData', id], // Используем id в качестве части ключа запроса
    queryFn: () => getProduct(id), // Передаем id в getItem
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  // Возвращаем данные, если они есть
  return data;
};