import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@shared/index';

export const MainPage = () => {
  return (
    <>
      <Breadcrumbs Title="Добро пожаловать" IsMainPage />
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
