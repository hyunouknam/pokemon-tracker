import React from 'react'
import { useState, useEffect } from 'react';
import pokemonService from '../services/PokemonService';

const MyBox = ({ token }) => {

  const [myPokemonList, setMyPokemonList] = useState([]);

  useEffect(() => {
    const getMyPokemonList = async () => {
      console.log(token);
      const response = await pokemonService.getMyPokemon(token);
      setMyPokemonList(response.data);
    }

    getMyPokemonList();
  }, [])

  return (
    <>
      {
        myPokemonList.map((pokemon) =>
          <div> {JSON.stringify(pokemon)} </div>
        )
      }
    </>
  )
}

export default MyBox