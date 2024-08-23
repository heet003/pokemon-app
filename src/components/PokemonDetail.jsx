/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemon(res.data);
    };
    fetchPokemonDetails();
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8 m-4 text-center max-w-lg mx-auto">
      <img
        className="w-32 h-32 mx-auto"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h2 className="text-2xl font-bold capitalize mt-4">{pokemon.name}</h2>
      <p className="text-sm text-gray-600">Height: {pokemon.height}</p>
      <p className="text-sm text-gray-600">Weight: {pokemon.weight}</p>
      <p className="text-sm text-gray-600">
        Type: {pokemon.types.map(type => type.type.name).join(', ')}
      </p>
      <div className="text-left mt-4">
        <h3 className="text-lg font-semibold">Abilities:</h3>
        <ul>
          {pokemon.abilities.map((ability, index) => (
            <li key={index} className="text-sm text-gray-600">
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetail;
