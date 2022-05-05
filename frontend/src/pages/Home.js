import React from 'react'
import { Pokemon } from '../components'
import { useState, useEffect } from 'react'
import pokemonService from '../services/PokemonService'

const Home = ({ openModal }) => {

  const MAX_POKEMON_NUMBER = 897;
  // show max of 10 pokemons until next load
  const MAX_PAGES = Math.ceil(MAX_POKEMON_NUMBER / 10.0);
  const [currentList, setCurrentList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pokemonNamesList, setPokemonNamesList] = useState([]);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await pokemonService.getPokemonNamesList();
      setPokemonNamesList(response.data);
    };
    getPokemons();

    return () => { setCurrentList([]) };
  }, [])

  useEffect(() => {
    setCurrentList(prev => [...prev, ...pokemonNamesList.slice(currentIndex, currentIndex + 20)]);
  }, [pokemonNamesList, currentIndex])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isBottom) return;
    else setIsBottom(false);
  }, [isBottom]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }
    if (currentIndex < MAX_POKEMON_NUMBER) {
      setCurrentIndex((prev) => prev + 20);
    }
    setIsBottom(true);
  };

  return (
    <div className='pokemonList'>
      {
        currentList && currentList.map((pokemon) =>
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