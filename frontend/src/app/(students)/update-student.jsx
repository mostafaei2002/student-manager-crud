import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUpdateStudent } from '@/hooks/useUpdateStudent';
import { useForm } from 'react-hook-form';

function UpdateStudent({ id, row, setOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { ...row },
  });

  const { updateStudent } = useUpdateStudent();

  function handleFormSubmit(data) {
    updateStudent({ id, data });
    setOpen(false);
  }

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Student</DialogTitle>
          <DialogDescription>
            Enter the student information and press Enter or click Update
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
              <Button onClick={handleSubmit(handleFormSubmit)}>Update</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
}

export default UpdateStudent;
