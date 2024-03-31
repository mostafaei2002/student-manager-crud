'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { useAuth } from '@/contexts/auth-context';

function Navbar() {
  const { authenticated, setJWT } = useAuth();

  function handleLogout() {
    setJWT(null);
  }

  return (
    <div className='border-b'>
      <div className='container flex items-center justify-between py-2 '>
        <nav className='flex gap-2 '>
          {authenticated && (
            <Link
              href='/'
              className={cn(
                buttonVariants({ variant: 'link', size: 'default' }),
              )}
            >
              Home
            </Link>
          )}
        </nav>

        <nav>
          {authenticated && (
            <Button
              className={cn(buttonVariants({ variant: 'secondary' }))}
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}

          {!authenticated && (
            <Link
              href='/login'
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'default' }),
              )}
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
