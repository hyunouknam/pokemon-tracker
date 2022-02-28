import { DetailedPopUp, Navbar, Pokemon } from './components';
import pokemonService from './services/PokemonService';
import { useState, useEffect } from 'react';


function App() {

  const [pokemonNameList, setNamePokemonList] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await pokemonService.getPokemonList();
      setNamePokemonList(response.data);
    };

    getPokemons();
  }, []);

  return (
    <>
      <Navbar />
      <div className='pokemonList'>
        {
          pokemonNameList.map((pokemon) => <div key={pokemon}>{pokemon}</div>)
        }
      </div>
    </>
  );
}

export default App;
