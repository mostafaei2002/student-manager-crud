'use client';
import React from 'react';
import { DataTable } from '../data-table';
import { columns } from '../columns';
import { useStudents } from '@/hooks/useStudents';

function StudentsPage() {
  const { data, isLoading } = useStudents();
  // console.log(data);

  if (!data) return;

  return (
    <div className='container h-full py-3'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default StudentsPage;
