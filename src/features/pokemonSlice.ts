import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl } from "../utils/constants";

export interface Pokemon {
  name?: string;
  id: number;
}

export const fetchPokemons: any = createAsyncThunk(
  "pokemon/fetchPokemons",
  async ({ page, limit }: { page: number; limit: number }) => {
    try {
      const response = await axios.get<{ results: {
        url: string; name: string 
}[] }>(
        `${ApiBaseUrl?.baseUrlPokemon}?offset=${
          (page - 1) * limit
        }&limit=${limit}`
      );
      const pokemons = await Promise.all(response.data.results.map(async (result) => {
        const pokemonId = result.url.split('/').filter(Boolean).pop();
        const pokemonResponse = await axios.get<{ id: number; name: string }>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        return pokemonResponse.data;
      }));
      return pokemons;
    } catch (error) {
      console.error("Failed to fetch Pokemons:", error);
      throw error;
    }
  }
);
export const fetchPokemonDetail = createAsyncThunk(
  "pokemon/fetchPokemonDetail",
  async (id: string) => {
    try {
      const response = await axios.get<Pokemon>(
        `${ApiBaseUrl?.baseUrlPokemon}/${id}`
      );
      // console.log({response})
      return response.data;
    } catch (error) {
      console.error("Failed to fetch Pokemon detail:", error);
      throw error;
    }
  }
);
interface PokemonState {
  pokemons: Pokemon[];
  selectedPokemon: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  currentPage: number;
  pageSize: number;
}

const initialState: PokemonState = {
  pokemons: [],
  status: "idle",
  error: null,
  selectedPokemon: null,
  currentPage: 1,
  pageSize: 20,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = "loading";
        //console.log({state})
      })
      .addCase(
        fetchPokemons.fulfilled,
        (state, action: PayloadAction<Pokemon[]>) => {
          state.status = "succeeded";
          state.pokemons = action.payload;
          //console.log({2nd:action.payload})
        }
      )
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPokemonDetail.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "succeeded";
          state.selectedPokemon = action.payload;
        }
      );
  },
});
export const { setPage } = pokemonSlice.actions;
export const selectAllPokemons = (state: { pokemon: PokemonState }) =>
  state.pokemon.pokemons;
export const selectSelectedPokemon = (state: { pokemon: PokemonState }) =>
  state.pokemon.selectedPokemon;
export const selectCurrentPage = (state: { pokemon: PokemonState }) =>
  state.pokemon.currentPage;
export default pokemonSlice.reducer;
