import axios from "axios";

const POKEMONS_REST_API_URL = 'http://localhost:8080/pokemon-list';
const POKEMON_INFO_REST_API_URL = 'http://localhost:8080/pokemon-info';

class PokemonService {

    getPokemons() {
        return axios.get(POKEMONS_REST_API_URL);
    }

    getPokemonInfo(pokemonName) {
        return axios.get(POKEMON_INFO_REST_API_URL, {
            params: {
              name: pokemonName
            }
          });
    }
}

export default new PokemonService();