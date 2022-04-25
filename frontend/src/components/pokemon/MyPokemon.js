import './pokemon.css';
import { useState, useEffect } from 'react';
import pokemonService from '../../services/PokemonService';

const POKEMON_ARTWORK_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const MyPokemon = ({ pokemon, openModal }) => {

  return (
    <>
      {Object.keys(pokemon).length !== 0 ?
        (
          <>
            <div className='pokemon' onClick={() => openModal(pokemon)}>
              <img src={`${POKEMON_ARTWORK_BASE_URL}${pokemon.id}.png`} alt={pokemon.name}></img>
            </div >
          </>
        ) : <></>
      }
    </>
  )
}

export default MyPokemon