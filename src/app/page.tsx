'use client';

import { ProductCard } from '@/components/cards/product-card';
import { EmptyNotification } from '@/components/notifications/empy-notification';
import { ProductCardSkeleton } from '@/components/skeletons/product-card-skeleton';
import { ProductListData } from '@/dummy-data/product-data';
import { useEffect, useState } from 'react';

export default function Home() {
  const [productList, setProductList] = useState(ProductListData);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='w-full min-h-screen px-10'>
      {productList.length === 0 && <EmptyNotification label='Product' />}

      <div className='w-full min-h-screen flex items-center'>
        <div className='w-full grid grid-cols-4 gap-8'>
          {isLoading ? (
            <ProductCardSkeleton />
          ) : (
            <>
              {productList.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  stock={product.stock}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
