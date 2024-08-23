/* eslint-disable */
import React from "react";

const Search = ({ onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      onChange={(e) => onSearchChange(e.target.value.toLowerCase())}
      className="p-2 rounded border border-gray-300 w-full max-w-sm mb-6"
    />
  );
};

export default Search;
