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
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

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

  const handleLoginSubmit = async (username, password, event) => {
    // const token = await userService.getUserToken();
    // redirect page to home
    // change navbar login to logout
    event.preventDefault();
    const response = await userService.loginUser(username, password);
    const responseArr = response.data.split(" ");
    setUser(responseArr[0]);
    setToken(responseArr[1]);
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
