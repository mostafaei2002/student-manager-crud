import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import QueryClientProvider from '@/components/query-client-provider';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/auth-context';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Student Manager',
  description: 'Built with React/Next & Strapi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'grid min-h-screen grid-rows-[auto_1fr_auto] bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <AuthProvider>
          <header>
            <Navbar />
          </header>
          <QueryClientProvider>
            <main className='flex items-center'>{children}</main>
          </QueryClientProvider>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
