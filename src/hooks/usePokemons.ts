import pokemonApi from "../api/pokemonApi";

export const getPokemons = async () => {
  return new Promise(async (resolve, reject) => {
    await pokemonApi.get("/ability/?limit=20").then((response) => {
      resolve(response?.data);
    }).catch((error)=>{
        reject(error)
    });
  });
};
