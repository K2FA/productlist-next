import { Plus } from 'lucide-react';

export function SubmitButton() {
  return (
    <button
      type='submit'
      className='h-fit py-1.5 px-3 bg-blue-500 text-white rounded flex items-center gap-1 cursor-pointer'>
      <Plus className='w-4' />
      Tambah
    </button>
  );
}
