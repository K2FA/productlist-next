import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PokemonType } from '@/types/pokemon-type';

interface TableListProps {
  pokemonList: PokemonType[];
}

export function TableList({ pokemonList }: TableListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-1/12'>No.</TableHead>
          <TableHead>Nama</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pokemonList.map((result, index: number) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{result.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
