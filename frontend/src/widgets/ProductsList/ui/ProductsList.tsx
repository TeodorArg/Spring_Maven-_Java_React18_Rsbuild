import { productsListQuery } from '@entites/index';
import { IProduct } from '@shared/index';

export const ProductsList = () => {
  const productsData = productsListQuery();

  // Проверяем, является ли productsData строкой, что будет указывать на состояние загрузки или ошибку
  if (typeof productsData === 'string') {
    return <div>{productsData}</div>; // Выводим сообщение о загрузке или ошибке
  }

  // Если данные успешно получены, выводим список продуктов
  return (
    <div>
      {productsData && productsData.length > 0 ? (
        <ul>
          {productsData.map((product: IProduct) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li> // Теперь TypeScript знает, что product имеет тип IProduct
          ))}
        </ul>
      ) : (
        <div>No products found</div> // Сообщение, если список продуктов пуст
      )}
    </div>
  );
};
