import axios from "axios";

const POKEMONS_REST_API_URL = 'http://localhost:8080/api/get/pokemon-list';
const POKEMONS_REST_API_URL_TEST = 'http://localhost:8080/api/get/pokemon-list-test';
const POKEMON_INFO_REST_API_URL = 'http://localhost:8080/api/get/pokemon-info';

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

export default { getPokemonNamesList, getPokemonInfo };


