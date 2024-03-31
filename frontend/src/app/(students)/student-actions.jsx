import Link from 'next/link';

import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DeleteStudent from './delete-student';
import UpdateStudent from './update-student';

import { SquarePen, Trash2 } from 'lucide-react';
import { useState } from 'react';

function StudentActions({ id, row }) {
  const [open, setOpen] = useState();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className='flex justify-center'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {/* <Link href={`students/${id}`}>
                <DropdownMenuItem className='flex items-center gap-1'>
                  <Eye className='text-foreground' size={16} /> View
                </DropdownMenuItem>
              </Link> */}

            <DialogTrigger className='w-full'>
              <DropdownMenuItem className='flex gap-1'>
                <SquarePen className='text-foreground' size={16} />
                Edit
              </DropdownMenuItem>
            </DialogTrigger>

            <DeleteStudent id={id}>
              <DropdownMenuItem className='flex gap-1'>
                <Trash2 className='text-foreground' size={16} />
                Delete
              </DropdownMenuItem>
            </DeleteStudent>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <UpdateStudent id={id} row={row} setOpen={setOpen} />
    </Dialog>
  );
}

export default StudentActions;
