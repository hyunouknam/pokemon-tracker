import axios from "axios";

const POKEMONS_REST_API_URL = 'http://localhost:8080/api/get/pokemon-list';
const POKEMONS_REST_API_URL_TEST = 'http://localhost:8080/api/get/pokemon-list-test';
const POKEMON_INFO_REST_API_URL = 'http://localhost:8080/api/get/pokemon-info';
const GET_MY_POKEMON_API_URL = 'http://localhost:8080/api/get/my-pokemon';
const POST_MY_POKEMON_API_URL = 'http://localhost:8080/api/post/my-pokemon';

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

const addMyPokemon = (pokemonId, name, types, ability, moves, hp, attack, defense, specialAttack, specialDefense, speed, token) => {
  axios.post(POST_MY_POKEMON_API_URL,
    {
      pokemonId: pokemonId,
      name: name,
      types: types,
      ability: ability,
      moves: moves,
      hp: hp,
      attack: attack,
      defense: defense,
      special_attack: specialAttack,
      special_defense: specialDefense,
      speed: speed,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
      }
    }
  );
}

const getMyPokemon = (token) => {
  return axios.get(GET_MY_POKEMON_API_URL,
    {
      headers: {
        'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
      }
    }
  );
}

export default { getPokemonNamesList, getPokemonInfo, getMyPokemon, addMyPokemon };


