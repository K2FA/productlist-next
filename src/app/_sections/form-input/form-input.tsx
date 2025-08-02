import { SubmitButton } from '@/components/buttons/submit-button';
import { LabelInput } from '@/components/inputs/label-input';

export function FormInput() {
  return (
    <div className='w-full space-y-4 mb-10'>
      <h1 className='text-4xl'>Tambah</h1>

      <LabelInput
        name='name'
        type='text'
        label='Name'
      />

      <LabelInput
        name='price'
        type='number'
        label='Price'
      />

      <LabelInput
        name='stock'
        type='number'
        label='Stock'
      />

      <SubmitButton />
    </div>
  );
}
