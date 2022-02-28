import './pokemon.css';
import { useState, useEffect } from 'react';
import pokemonService from '../../services/PokemonService';

const POKEMON_ARTWORK_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const Pokemon = ({ name }) => {

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const getPokemonInfo = async () => {
      const response = await pokemonService.getPokemonInfo(name);
      setPokemon(response.data);
    }

    getPokemonInfo();
  }, [])


  return (
    <div className='pokemon'>
      <img src={`${POKEMON_ARTWORK_BASE_URL}${pokemon.id}.png`} alt={name}></img>
    </div >
  )
}

export default Pokemon