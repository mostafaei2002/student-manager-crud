import ProtectedRoute from '@/components/protected-route';

function layout({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}

export default layout;
