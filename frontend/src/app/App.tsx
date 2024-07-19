import { AppRouter } from './routers';
import { Providers } from '@/app/providers';

import './styles/themes.scss';

export const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};
