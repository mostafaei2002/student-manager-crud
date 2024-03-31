import { useDeleteStudent } from '@/hooks/useDeleteStudent';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Trash2 } from 'lucide-react';

function DeleteStudent({ id, children }) {
  const { deleteStudent } = useDeleteStudent();

  function handleDelete() {
    // console.log(id);
    deleteStudent({ id });
  }

  return <div onClick={handleDelete}>{children}</div>;
}

export default DeleteStudent;
