import { ProductType } from '@/types/product-type';
import { SquarePen } from 'lucide-react';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { DeleteButton } from '../buttons/delete-button';
import { Card, CardContent, CardFooter } from '../ui/card';

export function ProductCard({
  name,
  price,
  stock,
  onDelete,
  setPendingDeleteName,
}: ProductType & { onDelete: () => void; setPendingDeleteName: Dispatch<SetStateAction<string | null>> }) {
  return (
    <Card>
      <CardContent className='w-full flex flex-col items-center justify-center text-center gap-4'>
        {/* name */}
        <h3 className='w-full'>{name}</h3>

        {/* price */}
        <p className=''>Rp {price}</p>

        {/* stock */}
        <p className=''>Stok: {stock}</p>
      </CardContent>

      <CardFooter className='w-full flex justify-center gap-4'>
        <Link
          href='/edit'
          className='py-1 px-2 bg-yellow-500 text-white rounded flex gap-1'>
          <SquarePen className='w-4' />
          Edit
        </Link>
        <DeleteButton
          name={name}
          onDelete={onDelete}
          setPendingDeleteName={setPendingDeleteName}
        />
      </CardFooter>
    </Card>
  );
}
