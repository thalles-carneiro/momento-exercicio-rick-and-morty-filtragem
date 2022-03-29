import React, { useState, useEffect } from 'react';

import fetchCharacters from '../services/fetchCharacters';
import CharactersContext from './CharactersContext';

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    species: '',
    gender: '',
  });

  useEffect(() => {
    (async () => {
      const charactersData = await fetchCharacters();
      setCharacters(charactersData);
    })();
  }, []);

  const charactersContext = {
    characters,
    name,
    setName,
    filters,
    setFilters,
  };

  return (
    <CharactersContext.Provider value={ charactersContext }>
      { children }
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
