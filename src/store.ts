import { configureStore } from '@reduxjs/toolkit';
import pokemonReducers from './features/pokemonSlice';



export default configureStore({
  reducer: {
    pokemon: pokemonReducers,
  },
});
export type RootState = ReturnType<typeof configureStore>;