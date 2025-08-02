import { AddNavButton } from '@/components/buttons/add-nav-button';
import { FilterSelect } from '@/components/selects/filter-select';
import { Input } from '@/components/ui/input';

export function ProductHeader() {
  return (
    <div className='w-full flex flex-wrap justify-between gap-y-4'>
      <div className='md:w-1/2 lg:w-2/3 xl:w-3/4 2xl:w-4/5'>
        <Input
          type='text'
          id='search'
          placeholder='Search'
          className='w-full'
        />
      </div>
      <div className='flex gap-4'>
        <FilterSelect />

        <AddNavButton />
      </div>
    </div>
  );
}
