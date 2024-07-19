import { FC } from 'react';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface IProviders {
  /** Content that will be wrapped by providers. */
  readonly children: JSX.Element;
}
const queryClient = new QueryClient();

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};
