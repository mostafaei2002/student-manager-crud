'use client';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';

function ProtectedRoute({ children }) {
  const { authenticated } = useAuth();
  const router = useRouter();
  if (!authenticated) return router.push('/login');

  return <>{children}</>;
}

export default ProtectedRoute;
