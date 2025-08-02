import { Card } from '../ui/card';

export function ProductCardSkeleton() {
  return Array(4)
    .fill(0)
    .map((_, index) => (
      <Card
        key={index}
        className='w-full h-40 bg-gray-200 animate-pulse'></Card>
    ));
}
