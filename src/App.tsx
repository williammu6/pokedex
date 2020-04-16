import React, { useState, useEffect } from 'react';

import api from './services/api';

import { PokemonType } from './interfaces/PokemonType';

import ListPokemons from './components/ListPokemons';

function App() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [pokemonsToShow, setPokemonsToShow] = useState<PokemonType[]>([]);

  const filterPokemons = (name: string) => {
    setPokemonsToShow(pokemons.filter((pokemon) => pokemon.name.includes(name)));
  };

  const getPokemons = async () => {
    try {
      const response = await api.get('pokemon?limit=100');
      let pokemons = response.data['results'] as PokemonType[];
      pokemons = pokemons.map((pokemon) => {
        const split = pokemon.url.split('/');
        const id = parseInt(split[split.length - 2]);
        return {
          id,
          name: pokemon.name,
          url: pokemon.url,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      });
      setPokemons(pokemons);
      setPokemonsToShow(pokemons);
    } catch (err) {}
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return <ListPokemons pokemons={pokemonsToShow} filterPokemons={filterPokemons} />;
}

export default App;
