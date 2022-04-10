import axios from "axios";

const POKEMONS_REST_API_URL = 'http://localhost:8080/api/get/pokemon-list';
const POKEMONS_REST_API_URL_TEST = 'http://localhost:8080/api/get/pokemon-list-test';
const POKEMON_INFO_REST_API_URL = 'http://localhost:8080/api/get/pokemon-info';
const MY_POKEMON_API_URL = 'http://localhost:8080/api/get/my-pokemon';

const getPokemonNamesList = () => {
  return axios.get(POKEMONS_REST_API_URL_TEST);
};

const getPokemonInfo = (pokemonName) => {
  return axios.get(POKEMON_INFO_REST_API_URL, {
    params: {
      name: pokemonName
    }
  });
}

const getMyPokemon = (token) => {
  return axios.get(MY_POKEMON_API_URL,
    {
      headers: {
        'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
      }
    }
  );
}

export default { getPokemonNamesList, getPokemonInfo, getMyPokemon };


