import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function FilterSelect() {
  return (
    <Select>
      <SelectTrigger className='cursor-pointer'>
        <SelectValue placeholder='Select an item' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='item1'>Item 1</SelectItem>
        <SelectItem value='item2'>Item 2</SelectItem>
        <SelectItem value='item3'>Item 3</SelectItem>
      </SelectContent>
    </Select>
  );
}
