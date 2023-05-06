import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PokeSingle = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3> {data.name}</h3>
      <button onClick={() => navigate(-1)} className="goBack">Go back </button>
      <img
        src={data.sprites?.other.dream_world.front_default}
        alt={data.name}
        className="pokeImage"/>
    </div>
  );
};

export default PokeSingle;