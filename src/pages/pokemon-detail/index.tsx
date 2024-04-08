import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonDetail,
  selectSelectedPokemon,
} from "../../features/pokemonSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const PokemonDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const selectedPokemon = useSelector(selectSelectedPokemon);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      dispatch<any>(fetchPokemonDetail(id));
    }
  }, [dispatch, id]);

  if (!selectedPokemon) {
    return <div>Loading...</div>;
  }

  const { height, weight, name, types } = selectedPokemon;

  return (
    <div>
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="product-breadcroumb">
                <button className="add_to_cart_button" onClick={() => navigate("/")}>Back</button>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="product-images">
                      <div className="product-main-img">
                        <img
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`}
                          alt={name}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="product-inner">
                      <h2 className="product-name">id: {id}</h2>
                      <div className="product-inner-price">
                        <ins>height: {height}</ins>
                        <ins>weight: {weight}</ins>
                      </div>

                      <div className="product-inner-category">
                        <h2>{name}</h2>
                        <p style={{display:"flex"}}>
                          Types:
                          {types.map((type: any) =><div style={{marginLeft:10}}>{type.type.name},</div> )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonDetail;
