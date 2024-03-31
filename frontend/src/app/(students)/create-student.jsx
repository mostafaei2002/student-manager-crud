import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateStudent } from '@/hooks/useCreateStudent';
import { DialogClose } from '@radix-ui/react-dialog';
import { Label } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function CreateStudent() {
  const [open, setOpen] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createStudent } = useCreateStudent();

  function handleFormSubmit(data) {
    createStudent(data, {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>Create</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a New Student</DialogTitle>
          <DialogDescription>
            Enter the student information and press Enter or click create to add
            a new student
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className='flex flex-col gap-2  pb-8'>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='firstName'>First Name</Label>
              <Input
                type='text'
                id='firstName'
                placeholder='First name'
                {...register('firstName')}
              />
            </div>

            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='lastName'>Last Name</Label>
              <Input
                type='text'
                id='lastName'
                placeholder='Last Name'
                {...register('lastName')}
              />
            </div>

            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='grade'>Grade</Label>
              <Input
                type='number'
                id='grade'
                placeholder='Grade e.g. 7'
                {...register('grade')}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose className='flex gap-2'>
              <Button type='button' variant='secondary'>
                Cancel
              </Button>
              <Button onClick={handleSubmit(handleFormSubmit)}>Create</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateStudent;
