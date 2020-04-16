import React, { useState } from 'react';

import Details from '../Details';

import { PokemonType } from '../../interfaces/PokemonType';

import OutsideClickHandler from 'react-outside-click-handler';

import './styles.css';

interface Props {
  pokemon: PokemonType;
}

const Pokemon: React.FC<Props> = ({ pokemon }) => {
  const [showingDetails, setShowingDetails] = useState<boolean>(false);

  const closeDetails = () => {
    setShowingDetails(false);
  };

  return (
    <div className="pokemon">
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      <button onClick={() => setShowingDetails(true)}>Details</button>
      {showingDetails &&
        <OutsideClickHandler
          onOutsideClick={() => setShowingDetails(false)}>
          <Details pokemon={pokemon} closeDetail={closeDetails} />
        </OutsideClickHandler>}
    </div>
  );
};

export default Pokemon;
