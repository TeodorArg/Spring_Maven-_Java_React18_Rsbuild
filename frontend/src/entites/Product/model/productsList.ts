import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/shared/index';

export const productsListQuery = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['productsListData'],
    queryFn: getProducts,
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  // Возвращаем данные, если они есть
  return data;
};
