import axios from "axios";

const POKEMONS_LOGIN_API_URL = 'http://localhost:8080/api/login';

const loginUser = (username, password) => {
  return axios.post(POKEMONS_LOGIN_API_URL, {
    username: username,
    password: password
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
    }
  });
}

export default { loginUser };


