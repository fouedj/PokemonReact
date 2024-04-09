import React, { useEffect } from "react";
import pokemonImage from "../../assets/pokemon.png";

import Card from "../../components/cards";
import { title } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  Pokemon,
  selectAllPokemons,
  fetchPokemons,
  selectCurrentPage,
  setPage,
} from "../../features/pokemonSlice";
import { useTranslation } from "react-i18next";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  React.useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);
  const pokemons = useSelector(selectAllPokemons);
  const currentPage = useSelector(selectCurrentPage);
  useEffect(() => {
    dispatch(fetchPokemons({ page: currentPage, limit: 10 }));
  }, [dispatch, currentPage]);
  const handleNextPage = () => {
    dispatch(setPage(currentPage + 1));
  };

  const handlePrevPage = () => {
    dispatch(setPage(Math.max(currentPage - 1, 1)));
  };
  // const renderPageNumbers = () => {
  //   const pages = [];
  //   for (let i = 1; i <= 3; i++) {
  //     pages.push(
  //       <li className="page-item" key={i} onClick={() => dispatch(setPage(i))}>
  //         <a className={"page-link" + (currentPage === i ? " active" : "")} href="#">
  //           {i}
  //         </a>
  //       </li>
  //     );
  //   }
  //   return pages;
  // };
  const renderPokemonCards = () => {
    return pokemons ? (
      pokemons?.map((pokemon: Pokemon, index: number) => {
        return (
          <Card
            key={index}
            buttonText={title?.buttonTitleDetail}
            id={pokemon?.id}
            title={pokemon.name}
            imageUrl={pokemonImage}
            onButtonClick={() => {}}
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
                <li
                  className={
                    "page-item " + (currentPage === 1 ? "disabled" : "")
                  }
                  onClick={handlePrevPage}
                >
                  <a className="page-link" href="#">
                  {t("pokemonDetail.prev")}
                  </a>
                </li>
                {/* {renderPageNumbers()} */}
                <li className="page-item">
                  <a className="page-link" href="#">
                    {currentPage}
                  </a>
                </li>
                <li className="page-item" onClick={handleNextPage}>
                  <a className="page-link" href="#">
                 {t("pokemonDetail.next")}
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
