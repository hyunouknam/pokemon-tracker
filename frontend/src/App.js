import { DetailedPopUp, Navbar, Pokemon } from './components';
import pokemonService from './services/PokemonService';
import { useState, useEffect } from 'react';
import "./app.css";


function App() {

  const [pokemonNamesList, setPokemonNamesList] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await pokemonService.getPokemonNamesList();
      setPokemonNamesList(response.data);
    };

    getPokemons();
  }, []);

  return (
    <>
      <Navbar />
      <div className='pokemonList'>
        {
          pokemonNamesList.map((pokemon) =>
            <Pokemon key={pokemon} name={pokemon} />
          )
        }
      </div>
    </>
  );
}

export default App;
