'use client';

import {
  QueryClientProvider as Provider,
  QueryClient,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function QueryClientProvider({ children }) {
  return <Provider client={queryClient}>{children}</Provider>;
}

export default QueryClientProvider;
