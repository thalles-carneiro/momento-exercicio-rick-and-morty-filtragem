import React, { useContext, useState } from 'react';

import CharactersContext from '../context/CharactersContext';

const initialCharInfo = {
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
};

const Filters = () => {
  const { name, setName, setFilters } = useContext(CharactersContext);
  const [charInfo, setCharInfo] = useState(initialCharInfo);

  const handleChangeCharInfo = ({ target: { id, value } }) => {
    setCharInfo((prevCharInfo) => ({
      ...prevCharInfo,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFilters(charInfo);

    setCharInfo(initialCharInfo);
  }

  return (
    <form
      style={ { textAlign: "center", marginBottom: "20px" } }
      onSubmit={ handleSubmit }
    >
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
      </label>

      <label htmlFor="status">
        Status:
        <select
          id="status"
          value={ charInfo.status }
          onChange={ handleChangeCharInfo }
        >
          <option>Alive</option>
          <option>Dead</option>
          <option>unknown</option>
        </select>
      </label>

      <label htmlFor="species">
        Species:
        <select
          id="species"
          value={ charInfo.species }
          onChange={ handleChangeCharInfo }
        >
          <option>Human</option>
          <option>Alien</option>
          <option>unknown</option>
        </select>
      </label>

      <label htmlFor="gender">
        Gender:
        <select
          id="gender"
          value={ charInfo.gender }
          onChange={ handleChangeCharInfo }
        >
          <option>Male</option>
          <option>Female</option>
          <option>unknown</option>
        </select>
      </label>

      <button type="submit">Filter</button>
    </form>
  );
};

export default Filters;
