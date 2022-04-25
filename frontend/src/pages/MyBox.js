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
    <>
      {
        myPokemonList.map((pokemon) =>
          <MyPokemon
            key={pokemon.id}
            pokemon={pokemon}
            openModal={openModal}
          />
        )
      }
    </>
  )
}

export default MyBox