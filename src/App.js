import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Navigation from './Nav';
import PokeList from './PokeList';
import PokeSingle from './PokeSingle';

function App() {


return (
  <div className="widthContainer">
  <BrowserRouter>
  <Navigation/>
  <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="pokedex" element= {<PokeList/>}/>
    <Route path="pokedex/:pokesingle" element={<PokeSingle />} />
  </Routes>
  </BrowserRouter>
  </div>
);
}

export default App;
