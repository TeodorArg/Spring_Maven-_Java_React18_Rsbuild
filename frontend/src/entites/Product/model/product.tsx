import { useQuery } from '@tanstack/react-query';
import { getProduct } from '@/shared/index';

// Модифицируем функцию, чтобы она принимала id
export const productQuery = (id: string) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['productData', id], // Используем id в качестве части ключа запроса
    queryFn: () => getProduct(id), // Передаем id в getItem
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  // Возвращаем данные, если они есть
  return data;
};
