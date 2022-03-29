import React from 'react';

import Filters from './components/Filters';
import Characters from './components/Characters';
import CharactersProvider from './context/CharactersProvider';

const App = () => (
  <CharactersProvider>
    <Filters />
    <Characters />
  </CharactersProvider>
);

export default App;
