import { DetailedPopUp, Navbar, Pokemon } from './components';
import pokemonService from './services/PokemonService';
import { useState, useEffect } from 'react';
import "./app.css";


function App() {

  const [pokemonNamesList, setPokemonNamesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await pokemonService.getPokemonNamesList();
      setPokemonNamesList(response.data);
    };

    getPokemons();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
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
      <DetailedPopUp
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
