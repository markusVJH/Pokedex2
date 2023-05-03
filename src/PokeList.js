import React, {useState, useEffect} from 'react';
import Card from './Card';
import Search from './Search';

const PokeList = () => {
  const [pokemonData, setPokemonData] = useState([]);

useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(response => response.json())
    .then(data => {
      const fetches = data.results.map(item => fetch(item.url).then(res => res.json()));
      Promise.all(fetches).then(res => setPokemonData(res));
    })
}, []);
  return (
    <div>
      <Search />
      <div id="pokeCards">
      {pokemonData.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          sprite={pokemon.sprites.front_default}
          
        />
      ))}
    </div>
    </div>
  );
};

export default PokeList;