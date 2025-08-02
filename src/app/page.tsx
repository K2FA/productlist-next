'use client';

import { EmptyNotification } from '@/components/notifications/empy-notification';
import { ProductListData } from '@/dummy-data/product-data';
import { ProductHeader } from '@/sections/product-header/product-header';
import { ProductList } from '@/sections/product-list/product-list';
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
    <div className='w-full min-h-screen p-10'>
      {productList.length === 0 && <EmptyNotification label='Product' />}

      <div className='w-full min-h-screen flex flex-col justify-center gap-10'>
        <ProductHeader />
        <ProductList
          isLoading={isLoading}
          productList={productList}
        />
      </div>
    </div>
  );
}
