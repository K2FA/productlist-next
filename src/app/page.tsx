'use client';

import { ProductHeader } from '@/app/_sections/product-header/product-header';
import { ProductList } from '@/app/_sections/product-list/product-list';
import { EmptyNotification } from '@/components/notifications/empy-notification';
import { ProductListData } from '@/dummy-data/product-data';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import { FormInput } from './_sections/form-input/form-input';

export default function Home() {
  const [productList, setProductList] = useState(ProductListData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('');
  const [inputDebounce, setInputDebounce] = useState<string>('');

  const [pendingDeleteName, setPendingDeleteName] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'price' | 'stock' | ''>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

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
    let result = [...ProductListData];

    if (inputDebounce === '') {
      setProductList(ProductListData);
    } else {
      result = result.filter((product) => product.name.includes(inputDebounce));

      if (sortBy) {
        result.sort((a, b) => {
          const valueA = a[sortBy];
          const valueB = b[sortBy];

          return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
        });
      }
      setProductList(result);
    }
  }, [inputDebounce, sortBy, sortOrder]);

  const handleDelete = () => {
    if (pendingDeleteName !== null) {
      setProductList((prev) => prev.filter((product) => product.name !== pendingDeleteName));
      setPendingDeleteName(null);
    }
  };

  return (
    <div className='w-full min-h-screen p-10'>
      <div className='w-full min-h-screen flex flex-col justify-center gap-10'>
        <FormInput />

        <ProductHeader onChange={handleSearch} />
        {productList.length === 0 && <EmptyNotification label='Product' />}

        <ProductList
          isLoading={isLoading}
          productList={productList}
          onDelete={handleDelete}
          setPendingDeleteName={setPendingDeleteName}
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
