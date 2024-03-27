import { configureStore } from '@reduxjs/toolkit';
import pokemonReducers from './features/pokemonSlice';


export default configureStore({
  reducer: {
    pokemon: pokemonReducers,
  },
});