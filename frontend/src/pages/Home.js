import React from 'react'
import { Pokemon, Search } from '../components'
import { useState, useEffect } from 'react'
import pokemonService from '../services/PokemonService'

const Home = ({ openModal }) => {

  const MAX_POKEMON_NUMBER = 897;
  const [currentList, setCurrentList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pokemonNamesList, setPokemonNamesList] = useState([]);
  const [isBottom, setIsBottom] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredPokemonNamesList, setFilteredPokemonNamesList] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await pokemonService.getPokemonNamesList();
      setPokemonNamesList(response.data);
      setFilteredPokemonNamesList(response.data);
    };
    getPokemons();

    return () => { setCurrentList([]) };
  }, [])

  useEffect(() => {
    setCurrentList([]);
    setCurrentIndex(0);
    setFilteredPokemonNamesList(pokemonNamesList.filter((pokemon) => pokemon.includes(searchValue)));
  }, [searchValue])


  useEffect(() => {
    setCurrentList(prev => [...prev, ...filteredPokemonNamesList.slice(currentIndex, currentIndex + 20)]);
  }, [filteredPokemonNamesList, currentIndex])

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

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <div className='searchBar'>
        <Search
          handleSearch={handleSearch}
        />
      </div>
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
    </>

  )
}

export default Home