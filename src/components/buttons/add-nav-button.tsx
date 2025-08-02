import { Plus } from 'lucide-react';
import Link from 'next/link';

export function AddNavButton() {
  return (
    <Link
      href='/add'
      className='h-fit py-1.5 px-3 bg-blue-500 text-white rounded flex items-center gap-1'>
      <Plus className='w-4' />
      Tambah
    </Link>
  );
}
