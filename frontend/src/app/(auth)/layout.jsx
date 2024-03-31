import UnAuthenticatedRoute from '@/components/unauthenticated-route';

function layout({ children }) {
  return (
    <UnAuthenticatedRoute className='flex items-center justify-center'>
      {children}
    </UnAuthenticatedRoute>
  );
}

export default layout;
