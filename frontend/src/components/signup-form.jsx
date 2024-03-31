'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { useSignup } from '@/hooks/useSignup';

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

export function SignupForm() {
  const { signupEmail, isPending } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  function handleEmailSignup({ username, email, password }) {
    signupEmail({ username, email, password });
  }
  function handleGithubSignup() {
    router.replace('http://localhost:1337/api/connect/github');
  }

  return (
    <Card className='mx-auto max-w-sm'>
      <CardHeader>
        <CardTitle className='text-xl'>Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='user-name'>User Name</Label>
            <Input
              id='user-name'
              placeholder='Username'
              required
              {...register('username', {
                required: {
                  value: true,
                  message: 'This field is required!',
                },
                minLength: {
                  value: 5,
                  message: 'This field should be at least 5 characters!',
                },
              })}
            />

            {errors.username && (
              <p className='text-sm text-foreground' role='alert'>
                {errors.username.message}
              </p>
            )}
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='mail@example.com'
              required
              {...register('email', {
                required: {
                  value: true,
                  message: 'This field is required!',
                },
                minLength: {
                  value: 5,
                  message: 'This field should be at least 5 characters!',
                },
              })}
            />

            {errors.email && (
              <p className='text-sm text-foreground' role='alert'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              placeholder='Password'
              {...register('password', {
                required: {
                  value: true,
                  message: 'This field is required!',
                },
                minLength: {
                  value: 8,
                  message: 'This field should be at least 8 characters!',
                },
              })}
            />

            {errors.password && (
              <p className='text-sm text-foreground' role='alert'>
                {errors.password.message}
              </p>
            )}
          </div>
          <Button
            type='submit'
            className='w-full'
            onClick={handleSubmit(handleEmailSignup)}
          >
            Create an account
          </Button>
          <Button
            variant='outline'
            className='w-full'
            onClick={handleGithubSignup}
          >
            Sign up with GitHub
          </Button>
        </div>
        <div className='mt-4 text-center text-sm'>
          Already have an account?{' '}
          <Link href='/login' className='underline'>
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
