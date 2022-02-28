import axios from "axios";

const POKEMONS_REST_API_URL = 'http://localhost:8080/pokemon-list';
const POKEMON_INFO_REST_API_URL = 'http://localhost:8080/pokemon-info';

const getPokemonList = () => {
  return axios.get(POKEMONS_REST_API_URL);
};

export default { getPokemonList };



    // getPokemonInfo(pokemonName) {
    //     return axios.get(POKEMON_INFO_REST_API_URL, {
    //         params: {
    //           name: pokemonName
    //         }
    //       });
    // }
