import React, { useContext } from 'react';

import CharCard from './CharCard';
import CharactersContext from '../context/CharactersContext';

import filterCharacters from '../helpers/filterCharacters';

const Characters = () => {
  const { characters, name, filters } = useContext(CharactersContext);

  return (
    <div style={ { display: "flex", gap: "10px", flexWrap: "wrap" } }>
      {
        filterCharacters(characters, name, filters)
          .map((char) => <CharCard key={ char.id } { ...char } />)
      }
    </div>
  );
};

export default Characters;
