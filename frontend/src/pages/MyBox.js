import React from 'react'
import { useState, useEffect } from 'react';
import pokemonService from '../services/PokemonService';
import { MyPokemon } from '../components';

const MyBox = ({ token, openModal }) => {

  const [myPokemonList, setMyPokemonList] = useState([]);

  useEffect(() => {
    const getMyPokemonList = async () => {
      const response = await pokemonService.getMyPokemon(token);
      setMyPokemonList(response.data);
    }

    getMyPokemonList();
  }, [])

  return (
    <div className='pokemonList'>
      {
        myPokemonList.map((pokemon) =>
          <MyPokemon
            key={pokemon.pokemonId}
            pokemon={pokemon}
            openModal={openModal}
          />
        )
      }
    </div>
  )
}

export default MyBox