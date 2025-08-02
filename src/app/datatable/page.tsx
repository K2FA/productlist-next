import { House } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';
import { TableList } from './_components/tables/table-list';

export default function DataTablePage() {
  const fetchPokemen = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    if (!response.ok) {
      throw new Error('Failed to fetch pokemon');
    }
    return response.json();
  };

  const pokemon = use(fetchPokemen());

  return (
    <div className='w-full min-h-screen p-10 flex flex-col justify-center gap-10'>
      <Link
        href='/'
        className='size-fit py-2 px-4 rounded flex gap-1 border border-solid border-black/50 hover:bg-green-500 hover:text-white transition duration-200 ease-in'>
        <House className='w-4' />
        Home
      </Link>

      <TableList pokemonList={pokemon.results} />
    </div>
  );
}
