import { signupWithEmail } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/auth-context';

export function useSignup() {
  const { setJWT } = useAuth();
  const { toast } = useToast();

  const { mutate: signupEmail, isPending } = useMutation({
    mutationKey: ['signup'],
    mutationFn: ({ username, email, password }) =>
      signupWithEmail({ username, email, password }),
    onSuccess: (data) => {
      setJWT(data.jwt);
      toast({ description: 'Account created successfully!' });
    },
    onError: (err) => {
      toast({ variant: 'destructive', description: err.message });
    },
  });

  return { signupEmail, isPending };
}
