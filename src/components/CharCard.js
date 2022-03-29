import React from 'react';

const CharCard = (char) => {
  const { name, status, species, gender, origin, image } = char;

  return (
    <div>
      <img src={ image } alt={ name } />
      <p>{ `Name: ${name}` }</p>
      <p>{ `Status: ${status}` }</p>
      <p>{ `Species: ${species}` }</p>
      <p>{ `Gender: ${gender}` }</p>
      <p>{ `Origin Name: ${origin.name}` }</p>
    </div>
  );
};

export default CharCard;
