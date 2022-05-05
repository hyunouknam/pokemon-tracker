import { DetailedHomePopUp, DetailedMyBoxPopUp, Navbar } from './components';
import { Home, MyBox, Login } from './pages';
import pokemonService from './services/PokemonService';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./app.css";
import userService from './services/UserService';
import { useNavigate } from 'react-router-dom';


function App() {

  const [isHomeModalOpen, setIsHomeModalOpen] = useState(false);
  const [isMyBoxModalOpen, setIsMyBoxModalOpen] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  let navigate = useNavigate();

  useEffect(() => {

  }, []);

  const openHomeModal = (pokemon) => {
    setCurrentPokemon(pokemon);
    setIsHomeModalOpen(true);
  };

  const closeHomeModal = () => {
    setIsHomeModalOpen(false);
  };

  const openMyBoxModal = (pokemon) => {
    setCurrentPokemon(pokemon);
    setIsMyBoxModalOpen(true);
  };

  const closeMyBoxModal = () => {
    setIsMyBoxModalOpen(false);
  };

  const handleLoginSubmit = async (username, password, event) => {
    // redirect page to home
    // change navbar login to logout
    event.preventDefault();
    const response = await userService.loginUser(username, password);
    const responseArr = response.data.split(" ");
    setUser(responseArr[0]);
    setToken(responseArr[1]);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/my-box'
          element={
            <MyBox
              token={token}
              openModal={openMyBoxModal}
            />}
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
              openModal={openHomeModal}
            />
          }
        />
      </Routes>
      {
        isHomeModalOpen &&
        <DetailedHomePopUp
          currentPokemon={currentPokemon}
          closeModal={closeHomeModal}
          token={token}
        />
      }
      {
        isMyBoxModalOpen &&
        <DetailedMyBoxPopUp
          currentPokemon={currentPokemon}
          closeModal={closeMyBoxModal}
          token={token}
        />
      }
    </>
  );
}

export default App;
