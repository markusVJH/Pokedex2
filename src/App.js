import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Navigation from './Nav';
import PokeList from './PokeList';

function App() {


return (
  <BrowserRouter>
  <Navigation/>
  <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="pokedex" element= {<PokeList/>}/>
  </Routes>
  </BrowserRouter>
);
}

export default App;
