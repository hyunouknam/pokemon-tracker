import { DetailedPopUp, Navbar, Pokemon } from './components';
import pokemonService from './services/PokemonService';
import { useState, useEffect } from 'react';


function App() {

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await pokemonService.getPokemonList();
      setPokemonList(response.data);
    };

    getPokemons();
  }, []);

  return (
    <>
      <Navbar />
      <div className='pokemonList'>
        {
          pokemonList.map((pokemon) => <div key={pokemon}>{pokemon}</div>)
        }
      </div>
    </>
  );
}

export default App;
