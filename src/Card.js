import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  const { id, name, types, sprite } = props;

  return (
    <div className="pokeCard">
      <div className="pokeInfo">
        <p>#{id} {name}</p> 
        <div className="pokeType">
          {types.map((type) => (
            <img
              key={type.type.name}
              id="type"
              src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type.type.name}.svg`}
              alt={type.type.name}
            />
          ))}
        </div>
      </div>
      <img src={sprite} alt="Pokemon"/>
      <Link to={name} className="link">See more</Link>
    </div>
  );
}

export default Card;
