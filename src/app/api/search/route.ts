import { NextResponse } from "next/server";

import pokemon from "@/pokemon.json";
import { Pokemon } from "@/types";

export async function GET(req: Request) {
  const { searchParams }: URL = new URL(req.url);
  const name: string | null = searchParams.get("name");
  const pokemonData: Pokemon[] = pokemon.filter((p: Pokemon) =>
    p.name.toLowerCase().includes(name?.toLowerCase() ?? "")
  );
  // Pagination to Top 10 Results
  return NextResponse.json(pokemonData.slice(0, 10));
}
