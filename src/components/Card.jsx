/* eslint-disable */ 
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.name}`} className="bg-white rounded-lg shadow-md p-4 text-center">
      <img
        className="w-24 h-24 mx-auto"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h3 className="text-lg font-semibold mt-2 capitalize">{pokemon.name}</h3>
      <p className="text-sm text-gray-600">Height: {pokemon.height}</p>
      <p className="text-sm text-gray-600">Weight: {pokemon.weight}</p>
      <p className="text-sm text-gray-600">
        Type: {pokemon.types.map(type => type.type.name).join(', ')}
      </p>
    </Link>
  );
};

export default Card;
