import { Breadcrumbs } from '@/shared/index';
import { ProductsList } from '@/widgets/ProductsList';
export const ProductsPage = () => {
  return (
    <div>
      <Breadcrumbs Title="Страница продуктов" />
      <ProductsList />
    </div>
  );
};
