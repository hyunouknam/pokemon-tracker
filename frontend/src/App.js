import { DetailedPopUp, Navbar } from './components';
import { Home, MyBox, Login } from './pages';
import pokemonService from './services/PokemonService';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./app.css";


function App() {

  const [pokemonNamesList, setPokemonNamesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    const getPokemons = async () => {
      const response = await pokemonService.getPokemonNamesList();
      setPokemonNamesList(response.data);
    };

    getPokemons();
  }, []);

  const openModal = (pokemon) => {
    setCurrentPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/my-box'
          element={<MyBox />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/'
          element={
            <Home
              pokemonNamesList={pokemonNamesList}
              openModal={openModal}
            />
          }
        />
      </Routes>
      <DetailedPopUp
        currentPokemon={currentPokemon}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </Router>
  );
}

export default App;
