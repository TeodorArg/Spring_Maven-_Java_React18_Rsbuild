import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from '../layout';
import { MainPage } from '@pages/MainPage';
import { ProductsPage } from '@pages/ProductsPage';
import { ItemsPage } from '@pages/ItemsPage';
import { ProductDetailPage } from '@pages/ProductDetailPage';
import { ItemDetailPage } from '@pages/ItemDetailPage';

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      handle={{
        crumb: (
          <Link to="/" className="text-slate-400 hover:text-slate-700">
            Main Page
          </Link>
        ),
      }}
    >
      <Route index element={<MainPage />} />
      <Route
        path="products"
        handle={{
          crumb: (
            <Link
              to="/products"
              className="text-slate-400 hover:text-slate-700"
            >
              Products
            </Link>
          ),
        }}
      >
        <Route index element={<ProductsPage />} />
        <Route
          path=":productId"
          element={<ProductDetailPage />}
          handle={{
            crumb: (
              <Link
                to="/:productId"
                className="text-slate-400 hover:text-slate-700"
              >
                ProductID
              </Link>
            ),
          }}
        />
      </Route>

      <Route
        path="items"
        handle={{
          crumb: (
            <Link to="/items" className="text-slate-400 hover:text-slate-700">
              Items
            </Link>
          ),
        }}
      >
        <Route index element={<ItemsPage />} />
        <Route
          path=":itemId"
          element={<ItemDetailPage />}
          handle={{
            crumb: (
              <Link
                to="/:itemId"
                className="text-slate-400 hover:text-slate-700"
              >
                ItemID
              </Link>
            ),
          }}
        />
      </Route>
    </Route>,
  );

  const router = createBrowserRouter(routers, {});

  return <RouterProvider router={router} />;
};
