import React from 'react'
import { Pokemon } from '../components'

const Home = ({ pokemonNamesList, openModal }) => {
  return (
    <div className='pokemonList'>
      {
        pokemonNamesList.map((pokemon) =>
          <Pokemon
            key={pokemon}
            name={pokemon}
            openModal={openModal}
          />
        )
      }
    </div>
  )
}

export default Home