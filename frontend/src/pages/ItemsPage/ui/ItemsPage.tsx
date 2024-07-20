import { Breadcrumbs } from '@/shared/index';
import { ItemsList } from '@/widgets/index';

export const ItemsPage = () => {
  return (
    <div>
      <Breadcrumbs Title="Страница Товаров" />
      <ItemsList />
    </div>
  );
};
