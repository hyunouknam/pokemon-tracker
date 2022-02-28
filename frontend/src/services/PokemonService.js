import axios from "axios";

const POKEMONS_REST_API_URL = 'http://localhost:8080/pokemon-list';
const POKEMONS_REST_API_URL_TEST = 'http://localhost:8080/pokemon-list-test';
const POKEMON_INFO_REST_API_URL = 'http://localhost:8080/pokemon-info';

const getPokemonList = () => {
  return axios.get(POKEMONS_REST_API_URL_TEST);
};

export default { getPokemonList };



    // getPokemonInfo(pokemonName) {
    //     return axios.get(POKEMON_INFO_REST_API_URL, {
    //         params: {
    //           name: pokemonName
    //         }
    //       });
    // }
