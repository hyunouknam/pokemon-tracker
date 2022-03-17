import { DetailedPopUp, Navbar } from './components';
import { Home, MyBox, Login } from './pages';
import pokemonService from './services/PokemonService';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./app.css";
import userService from './services/UserService';


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

  const handleLoginSubmit = async () => {
    // const token = await userService.getUserToken();
    // redirect page to home
    // change navbar login to logout
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
          element={
            <Login
              handleLoginSubmit={handleLoginSubmit}
            />}
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
