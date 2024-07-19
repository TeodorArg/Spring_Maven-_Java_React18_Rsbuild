import { Link } from 'react-router-dom';

export const MainPage = () => {
  const data = [
    { id: 1, name: 'Item 1', descriptions: 'Description 1', price: '2000₽' },
    { id: 2, name: 'Item 2', descriptions: 'Description 2', price: '13500₽' },
  ];
  return (
    <>
      <h1>Добро пожаловать на главную страницу!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/products">Список продуктов</Link>
          </li>
          <li>
            <Link to="/items">Список товаров</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
