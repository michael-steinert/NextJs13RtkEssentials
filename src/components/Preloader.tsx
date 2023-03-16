"use client";
import { store } from "@/store";
import { setStartupPokemon } from "@/store/search-slice";
import { Pokemon } from "@/types";
import { MutableRefObject, useRef } from "react";

function Preloader({ pokemons }: { pokemons: Pokemon[] }) {
  // Indicator that Data is loaded only once
  const loaded: MutableRefObject<boolean> = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartupPokemon(pokemons));
    loaded.current = true;
  }
  return null;
}

export default Preloader;
