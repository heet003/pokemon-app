/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import Search from './components/Search';
import PokemonDetail from './components/PokemonDetail';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    const fetchPokemonData = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      const promises = res.data.results.map(async (pokemon) => {
        const pokemonDetails = await axios.get(pokemon.url);
        return pokemonDetails.data;
      });
      const results = await Promise.all(promises);
      setPokemonData(results);
      setFilteredData(results);
    };
    fetchPokemonData();
  }, []);

  useEffect(() => {
    const filtered = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchField)
    );
    setFilteredData(filtered);
  }, [searchField, pokemonData]);

  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Pokémon List</h1>
        <Search onSearchChange={setSearchField} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {filteredData.map((pokemon) => (
                  <Card key={pokemon.id} pokemon={pokemon} />
                ))}
              </div>
            }
          />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
