import { Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Dispatch, SetStateAction } from 'react';

export function DeleteButton({
  id,
  onDelete,
  setPendingDeleteId,
}: {
  id: number;
  onDelete: () => void;
  setPendingDeleteId: Dispatch<SetStateAction<number | null>>;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className='py-1 px-2 bg-red-500 text-white rounded flex gap-1 cursor-pointer'
        onClick={() => setPendingDeleteId(id)}>
        <Trash2 className='w-4' />
        Hapus
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete and remove data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='cursor-pointer'>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className='cursor-pointer bg-red-500'
            onClick={onDelete}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
