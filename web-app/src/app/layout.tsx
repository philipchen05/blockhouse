'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang='en'>
        <body>
          <header>🚀 Crypto Tracker</header>
          <main>{children}</main>
          <footer>© 2025 Crypto Tracker</footer>
        </body>
      </html>
    </QueryClientProvider>
  );
}
