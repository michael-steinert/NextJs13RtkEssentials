import SSRPokemonTable from "@/components/SSRPokemonTable";
import { store } from "@/store";
import { setStartupPokemon } from "@/store/search-slice";
import { Pokemon } from "@/types";

export default async function Home() {
  const req: Response = await fetch("http://localhost:3000/api/search");
  const data: Pokemon[] = await req.json();
  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      <SSRPokemonTable />
    </main>
  );
}
