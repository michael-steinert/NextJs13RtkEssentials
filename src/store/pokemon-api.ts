import { Pokemon } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  tagTypes: ["pokemon"],
  endpoints: (builder) => ({
    search: builder.query<Pokemon[], string>({
      query: (q: string) => `search?name=${q}`,
      providesTags: (result, error, search) => [{ type: "pokemon", search }],
    }),
  }),
});
