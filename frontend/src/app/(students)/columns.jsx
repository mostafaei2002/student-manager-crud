'use client';

import { Button } from '@/components/ui/button';

import { Checkbox } from '@/components/ui/checkbox';

import { ArrowUpDown, SquarePen, Trash2 } from 'lucide-react';
import StudentActions from './student-actions';

export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'grade',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Grade
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: (row) => {
      return <div className='ms-4'>{row.getValue() + 'th'}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const id = Number(row.original.id);
      const rowData = row.original;

      return <StudentActions id={id} row={rowData} />;
    },
  },
];
