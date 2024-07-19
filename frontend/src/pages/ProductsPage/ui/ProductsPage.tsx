import { Breadcrumbs } from '@/shared/index';
import { ProductsList } from '@/widgets/ProductsList';
export const ProductsPage = () => {
  return (
    <div>
      <Breadcrumbs Title="ProductsPage" />
      <ProductsList />
    </div>
  );
};
