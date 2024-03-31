import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createStudent as createStudentApi } from '@/services/students';
import { useToast } from '@/components/ui/use-toast';

export function useCreateStudent() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: createStudent, isPending } = useMutation({
    mutationFn: (data) => createStudentApi(data),
    mutationKey: ['create-student'],
    onSuccess: () => {
      toast({
        description: 'Student created successfully!',
      });
      queryClient.invalidateQueries(['students']);
    },
    onError: (err) => {
      toast({
        title: 'Failed to create student!',
        description: err.message,
        variant: 'destructive',
      });
    },
  });

  return { createStudent, isPending };
}
