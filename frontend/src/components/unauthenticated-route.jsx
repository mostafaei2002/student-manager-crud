'use client';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';

function UnAuthenticatedRoute({ children }) {
  const { authenticated } = useAuth();
  const router = useRouter();

  if (authenticated) return router.push('/students');

  return <>{children}</>;
}

export default UnAuthenticatedRoute;
