'use client';

import { EmptyNotification } from '@/components/notifications/empy-notification';
import { ProductListData } from '@/dummy-data/product-data';
import { ProductHeader } from '@/sections/product-header/product-header';
import { ProductList } from '@/sections/product-list/product-list';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';

export default function Home() {
  const [productList, setProductList] = useState(ProductListData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('');
  const [inputDebounce, setInputDebounce] = useState<string>('');

  const [pendingDeleteId, setPendingDeleteId] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const delayedInput = setTimeout(() => {
      setInputDebounce(inputValue);
    }, 300);
    return () => clearTimeout(delayedInput);
  }, [inputValue]);

  useEffect(() => {
    if (inputDebounce === '') {
      setProductList(ProductListData);
    } else {
      const result = ProductListData.filter((product) => product.name.includes(inputDebounce));

      setProductList(result);
    }
  }, [inputDebounce]);

  const handleDelete = () => {
    if (pendingDeleteId !== null) {
      setProductList((prev) => prev.filter((product) => product.id !== pendingDeleteId));
      setPendingDeleteId(null);
    }
  };

  return (
    <div className='w-full min-h-screen p-10'>
      <div className='w-full min-h-screen flex flex-col justify-center gap-10'>
        <ProductHeader onChange={handleSearch} />
        {productList.length === 0 && <EmptyNotification label='Product' />}

        <ProductList
          isLoading={isLoading}
          productList={productList}
          onDelete={handleDelete}
          setPendingDeleteId={setPendingDeleteId}
        />

        <Link
          href='/datatable'
          className='size-fit py-2 px-4 rounded flex gap-1 border border-solid border-black/50 bg-amber-200'>
          Tabel Pokemon
        </Link>
      </div>
    </div>
  );
}
