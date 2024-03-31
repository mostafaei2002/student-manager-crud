import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/auth-context';
import { loginWithCredentials } from '@/services/auth';

export function useLogin() {
  const { setJWT } = useAuth();
  const { toast } = useToast();

  const { mutate: login, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: ({ identifier, password }) =>
      loginWithCredentials({ identifier, password }),
    onSuccess: (data) => {
      setJWT(data.jwt);
      toast({ description: 'You are now Logged in.' });
    },
    onError: (err) => {
      toast({ variant: 'destructive', description: err.message });
    },
  });

  return { login, isPending };
}
