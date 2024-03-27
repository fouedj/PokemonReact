import React from "react";
import pokemonImage from "../../assets/pokemon.png";

import Card from "../../components/cards";
import { title } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  Pokemon,
  selectAllPokemons,
  fetchPokemons,
} from "../../features/pokemonSlice";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);
  const pokemons = useSelector(selectAllPokemons);
  const renderPokemonCards = () => {
    return pokemons ? (
      pokemons?.map((pokemon: Pokemon, index: number) => {
        return (
          <Card
            key={index}
            buttonText={title?.buttonTitleDetail}
            title={pokemon.name}
            imageUrl={pokemonImage}
            onButtonClick={() =>
              console.log(`Clicked on ${pokemon.name} card!!`)
            }
          />
        );
      })
    ) : (
      <div>Loading...</div>
    );
  };
  return (
    <div className="single-product-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">{renderPokemonCards()}</div>

        <div className="row">
          <div className="col-md-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonList;
