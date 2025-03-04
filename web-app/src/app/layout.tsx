'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { Inter, Inconsolata } from 'next/font/google';

const queryClient = new QueryClient();
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '700'] });
const inconsolata = Inconsolata({ subsets: ['latin'], weight: ['300', '400', '700'] });

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang='en'>
        <body className={`${inconsolata.className} flex-col h-screen flex items-center justify-center gap-10`}>
          <header className={`${inter.className} w-2xs rounded-xl py-2 flex gap-2 bg-white justify-center text-2xl font-mono text-black`}>
            <img src='https://www.blockhouse.app/svg/IconBlack.svg'></img>blockhouse.app </header>
          <main className='flex justify-center'>{children}</main>
          <footer className='flex justify-center'>© 2025 Philip Chen</footer>
        </body>
      </html>
    </QueryClientProvider>
  );
}
