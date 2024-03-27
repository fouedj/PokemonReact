
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Pokemon {
  name: string;
}

export const fetchPokemons:any = createAsyncThunk('pokemon/fetchPokemons', async () => {
  try {
    const response = await axios.get<{ results: { name: string }[] }>('https://pokeapi.co/api/v2/pokemon');
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch Pokemons:', error);
    throw error;
  }
});

interface PokemonState {
  pokemons: Pokemon[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PokemonState = {
  pokemons: [],
  status: 'idle',
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = 'loading';
        //console.log({state})
      })
      .addCase(fetchPokemons.fulfilled, (state, action: PayloadAction<Pokemon[]>) => {
        state.status = 'succeeded';
        state.pokemons = action.payload;
        //console.log({2nd:action.payload})
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllPokemons = (state: { pokemon: PokemonState }) => state.pokemon.pokemons;

export default pokemonSlice.reducer;
