import React from 'react';

import { PokemonType } from '../../interfaces/PokemonType';

import Pokemon from '../Pokemon';

import './styles.css';

interface Props {
  pokemons: PokemonType[];
  filterPokemons(name: string): void;
}

const ListPokemons: React.FC<Props> = ({ pokemons, filterPokemons }) => {

  return (
    <div className="container">
      <input
        type="text"
        onChange={(e) => filterPokemons(e.target.value)}
        className="pokeSearchField"
        placeholder="Enter pokemon name"
      />
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Pokemon pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPokemons;
