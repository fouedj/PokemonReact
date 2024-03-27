import axios from 'axios';
import { ApiBaseUrl } from '../utils/constants';

const pokemonApi = axios.create({
  baseURL: ApiBaseUrl?.baseUrlPokemon,
  headers: {
  },
});
export default pokemonApi