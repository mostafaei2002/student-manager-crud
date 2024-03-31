import { getStudents } from '@/services/students';
import { useQuery } from '@tanstack/react-query';

export function useStudents() {
  const { data, isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: () => getStudents(),
  });

  return { data, isLoading };
}
