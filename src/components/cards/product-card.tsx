import { ProductCardProps } from '@/types/product-type';
import { Card, CardContent } from '../ui/card';

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
    </Card>
  );
}
