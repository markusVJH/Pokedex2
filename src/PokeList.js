import React, {useState, useEffect} from 'react';
import Card from './Card';

const PokeList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  setIsLoading(true);
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(response => response.json())
    .then(data => {
      const fetches = data.results.map(item => fetch(item.url).then(res => res.json()));
      Promise.all(fetches).then(res => setPokemonData(res));setIsLoading(false);
    })
}, []);
const searchInputHandler = (e) => {
  setSearchInput(e.target.value)
}

const searchFilter = pokemonData.filter(item => {
  return item.name.includes(searchInput)
})

if (isLoading) {
  return <p>Loading...</p>;
}
  return (
    <div>
      <input onChange={searchInputHandler} className="searchInput" placeholder='Search :)'/>
      <div id="pokeCards">
      {searchFilter.map((pokemon) => (
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