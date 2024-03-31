'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLogin } from '@/hooks/useLogin';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, isPending } = useLogin();

  const router = useRouter();

  function handleCredentialsLogin({ identifier, password }) {
    login({ identifier, password });
  }
  function handleGithubLogin() {
    router.replace('http://localhost:1337/api/connect/github');
  }

  return (
    <Card className='mx-auto max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>
          Enter your email or username below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='identifier'>Username or Email</Label>
            <Input
              id='identifier'
              type='text'
              placeholder='email@example.com'
              required
              {...register('identifier')}
            />
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center'>
              <Label htmlFor='password'>Password</Label>
              <Link href='#' className='ml-auto inline-block text-sm underline'>
                Forgot your password?
              </Link>
            </div>
            <Input
              id='password'
              type='password'
              placeholder='Password'
              required
              {...register('password')}
            />
          </div>
          <Button
            type='submit'
            className='w-full'
            onClick={handleSubmit(handleCredentialsLogin)}
          >
            Login
          </Button>
          <Button
            variant='outline'
            className='w-full'
            onClick={handleGithubLogin}
          >
            Login with Github
          </Button>
        </div>
        <div className='mt-4 text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link href='/signup' className='underline'>
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
