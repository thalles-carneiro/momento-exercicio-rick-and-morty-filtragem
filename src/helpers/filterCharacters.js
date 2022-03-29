const filterCharacters = (characters, filterName, filters) => {
  let filteredChars = [...characters];

  filteredChars = filteredChars
    .filter(({ name }) => name.toLowerCase().includes(filterName.toLowerCase()));

  const filtersValues = Object.values(filters);

  if (filtersValues.every((filter) => filter)) {
    filteredChars = filteredChars
      .filter(({ status, species, gender }) => (
        status === filters.status
        && species === filters.species
        && gender === filters.gender
      ));
  }

  return filteredChars;
};

export default filterCharacters;
