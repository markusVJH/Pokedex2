import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './Search/Search';
import Card from './Card';

const pokeCards = (pokemonList) => {
  document.querySelector('#pokeCards').innerHTML = pokemonList.map((item, i) => `<div class="pokeCard"><div class="pokeInfo">#${item.id} ${item.name}<div class="pokeType">${item.types.map(t => `<img id="type" src="https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${t.type.name}.svg" alt="${t.type.name}"/>`).join('')}</div></div><img src="${item.sprites.front_default}"/></div>`).join('');
};

const fetchData = (limit, offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;

  fetch(url)
  .then(response => response.json())
  .then(json => {

    const fetches = json.results.map(item => {
      return fetch(item.url).then(res => res.json())
    })

    Promise.all(fetches).then(res => {
      pokemonData = res;
      pokeCards(pokemonData); // Display the full list of Pokemon
    })
  })
}
let pokemonData = [];

function App() {
  return (
    <div className="App">
      <header>
      <h1>Pokedex</h1>
      <Search/>
      </header>
    </div>
  );
}

export default App;
