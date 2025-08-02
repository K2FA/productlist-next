import { ProductCardProps } from '@/types/product-type';
import { SquarePen, Trash2 } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../ui/card';

export function ProductCard({ name, price, stock }: ProductCardProps) {
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
        <button className='py-1 px-2 bg-yellow-500 text-white rounded flex gap-1'>
          <SquarePen className='w-4' />
          Edit
        </button>
        <button className='py-1 px-2 bg-red-500 text-white rounded flex gap-1'>
          <Trash2 className='w-4' />
          Hapus
        </button>
      </CardFooter>
    </Card>
  );
}
