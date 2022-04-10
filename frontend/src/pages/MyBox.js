import React from 'react'
import { useState, useEffect } from 'react';
import pokemonService from '../services/PokemonService';

const MyBox = (token) => {

  const [myPokemonList, setMyPokemonList] = useState([]);

  useEffect(() => {
    const getMyPokemonList = async () => {
      const response = await pokemonService.getMyPokemon;
      setMyPokemonList(response.data);
    }

    getMyPokemonList();
  }, [])

  return (
    <>
      {myPokemonList}
    </>
  )
}

export default MyBox