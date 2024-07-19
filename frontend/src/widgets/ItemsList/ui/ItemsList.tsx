import { itemsListQuery } from '@entites/index';
import { IItem } from '@shared/index';
import { Link } from 'react-router-dom';

export const ItemsList = () => {
  const itemsData = itemsListQuery();

  // Проверяем, является ли productsData строкой, что будет указывать на состояние загрузки или ошибку
  if (typeof itemsData === 'string') {
    return <div>{itemsData}</div>; // Выводим сообщение о загрузке или ошибке
  }

  // Если данные успешно получены, выводим список Items
  return (
    <div>
      {itemsData && itemsData.length > 0 ? (
        <ul>
          {itemsData.map((item: IItem) => (
            <li key={item.id}>
              <Link
                to={`/items/${item.id}`}
                className="font-bold text-slate-900 hover:text-slate-500"
              >
                {item.name}
              </Link>
              <br />
              {item.description}
            </li>
          ))}
        </ul>
      ) : (
        <div>No items found</div> // Сообщение, если список Items пуст
      )}
    </div>
  );
};
