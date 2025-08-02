import { Input } from '../ui/input';

interface LabelInputProps {
  label: string;
  type: string;
  name: string;
}

export function LabelInput({ label, type, name }: LabelInputProps) {
  return (
    <label className='flex flex-col gap-2'>
      <span>{label}</span>
      <Input
        type={type}
        id={name}
        placeholder={`Massukan ${name}`}
      />
    </label>
  );
}
