import Preloader from "@/components/Preloader";
import Providers from "@/components/Provider";
import SearchInput from "@/components/SearchInput";
import { store } from "@/store";
import { setStartupPokemon } from "@/store/search-slice";
import { Pokemon } from "@/types";

// As a Server-Side Component it can be asynchronous
// It only runs on the SErver therefore it can not handle Client-Side Interactions
export default async function Home() {
  const req: Response = await fetch("http://localhost:3000/api/search");
  const data: Pokemon[] = await req.json();
  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      {/* Passing Data from Server to Client-Side Component */}
      <Preloader pokemons={data} />
      <Providers>
        <SearchInput />
      </Providers>
    </main>
  );
}
