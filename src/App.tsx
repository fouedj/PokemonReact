import "./style/style.css";
import React from "react";
import Header from "./components/header";
import { container, title } from "./utils/constants";
import Footer from "./footer";
import { Provider } from "react-redux";
import store from "./store";
import PokemonList from "./pages/pokemon-list";
import PokemonDetail from "./pages/pokemon-detail";
import {BrowserRouter ,Route,Routes } from "react-router-dom";
import LanguageSelector from "./components/LanguageSelector";


function App() {
  return ( 
     <div className="App"> 
         <Provider store={store}>   
      <BrowserRouter>
        <Header title={title?.pokemon} />
        <LanguageSelector/>
            <Routes>
            <Route path="/" Component={PokemonList}/>
            </Routes>
            <Routes>
              <Route path="/pokemon/:id" Component={PokemonDetail}/>
            </Routes>
         <Footer
          container={container?.footerContainer}
          title={title?.footerTitle}
        />
  </BrowserRouter>
      
    </Provider>  
     
   
     </div>
  );
}

export default App;
