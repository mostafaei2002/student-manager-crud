'use client';
import useLocalStorage from '@/hooks/useLocalStorage';
import { SERVER } from '@/services/constants';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@/contexts/auth-context';

function GithubAuth() {
  const router = useRouter();
  const params = useSearchParams();
  const accessToken = params.get('access_token');

  const { setJWT } = useAuth();

  useEffect(() => {
    async function getToken() {
      const res = await axios.get(
        `${SERVER}/api/auth/github/callback?access_token=${accessToken}`,
      );

      const {
        data: { jwt },
      } = res;

      setJWT(jwt);

      router.push('/');
    }
    getToken();
  }, [accessToken, setJWT, router]);

  return null;
}

export default GithubAuth;
