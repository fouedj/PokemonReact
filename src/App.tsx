import "./style/style.css";
import React from "react";
import Header from "./components/header";
import { container, title } from "./utils/constants";
import Footer from "./footer";
import { Provider } from "react-redux";
import store from "./store";
import PokemonList from "./pages/pokemon-list";
import PokemonDetail from "./pages/pokemon-detail";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <div>
            <Header title={title?.pokemon} />
            <PokemonList />
          </div>
          <PokemonDetail />
        </div>
        <Footer
          container={container?.footerContainer}
          title={title?.footerTitle}
        />
      </div>
    </Provider>
  );
}

export default App;
