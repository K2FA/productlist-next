export function EmptyNotification({ label }: { label: string }) {
  return (
    <div className='w-full min-h-screen flex items-center justify-center text-center text-4xl'>{label} is Empty</div>
  );
}
