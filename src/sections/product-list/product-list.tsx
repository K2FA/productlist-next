import { ProductCard } from '@/components/cards/product-card';
import { ProductCardSkeleton } from '@/components/skeletons/product-card-skeleton';
import { ProductType } from '@/types/product-type';
import { Dispatch, SetStateAction } from 'react';

interface ProductListProps {
  isLoading?: boolean;
  productList: ProductType[];
  onDelete: () => void;
  setPendingDeleteId: Dispatch<SetStateAction<number | null>>;
}

export function ProductList({ isLoading, productList, onDelete, setPendingDeleteId }: ProductListProps) {
  return (
    <div className={`w-full h-fit grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8`}>
      {isLoading ? (
        <ProductCardSkeleton />
      ) : (
        <>
          {productList.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              onDelete={onDelete}
              setPendingDeleteId={setPendingDeleteId}
            />
          ))}
        </>
      )}
    </div>
  );
}
