import React from 'react';

import { PokemonType } from '../../interfaces/PokemonType';

import './styles.css';

import { FiX } from 'react-icons/fi';

interface Props {
    pokemon: PokemonType;
    closeDetail(): void;
}

const Details: React.FC<Props> = ({ pokemon, closeDetail }) => {
    return (
        <div className="container">
            <FiX onClick={closeDetail} className="close-btn">x</FiX>
            <h1>{pokemon.name}</h1>
        </div>
    );
}


export default Details;
