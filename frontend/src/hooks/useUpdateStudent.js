import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateStudent as updateStudentApi } from '@/services/students';
import { useToast } from '@/components/ui/use-toast';

export function useUpdateStudent() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: updateStudent, isPending } = useMutation({
    mutationFn: (data) => updateStudentApi(data),
    mutationKey: ['update-student'],
    onSuccess: () => {
      toast({
        description: 'Student updated successfully!',
      });
      queryClient.invalidateQueries(['students']);
    },
    onError: (err) => {
      toast({
        title: 'Failed to update student!',
        description: err.message,
        variant: 'destructive',
      });
    },
  });

  return { updateStudent, isPending };
}
