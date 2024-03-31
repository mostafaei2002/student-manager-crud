import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteStudent as deleteStudentApi } from '@/services/students';
import { useToast } from '@/components/ui/use-toast';

export function useDeleteStudent() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: deleteStudent, isPending } = useMutation({
    mutationFn: (data) => deleteStudentApi(data),
    mutationKey: ['delete-student'],
    onSuccess: () => {
      toast({
        description: 'Student deleted successfully!',
      });
      queryClient.invalidateQueries(['students']);
    },
    onError: (err) => {
      toast({
        title: 'Failed to delete student!',
        description: err.message,
        variant: 'destructive',
      });
    },
  });

  return { deleteStudent, isPending };
}
