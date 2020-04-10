import React from 'react';

import { PokemonType } from '../../interfaces/PokemonType';

import './styles.css';

interface Props {
  pokemon: PokemonType;
}

const Pokemon: React.FC<Props> = ({ pokemon }) => (
  <div className="pokemon">
    <img src={pokemon.imageUrl} alt={pokemon.name} />
    <p>{pokemon.name}</p>
  </div>
);

export default Pokemon;
