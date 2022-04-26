import './pokemon.css';
import { useState, useEffect } from 'react';
import pokemonService from '../../services/PokemonService';

const POKEMON_ARTWORK_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const Pokemon = ({ name, openModal }) => {

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const getPokemonInfo = async () => {
      const response = await pokemonService.getPokemonInfo(name);
      const types = response.data.types.map(type => {
        return { value: type.type.name, label: type.type.name };
      });
      const abilities = response.data.abilities.map(ability => {
        return { value: ability.ability.name, label: ability.ability.name };
      });
      const moves = response.data.moves.map(moves => {
        return { value: moves.move.name, label: moves.move.name };
      });

      setPokemon(prev =>
      ({
        ...prev,
        id: response.data.id,
        name: response.data.name,
        types: types,
        abilities: abilities,
        stats: response.data.stats,
        moves: moves,
      }));
    }

    getPokemonInfo();
  }, [])


  return (
    <>
      {Object.keys(pokemon).length !== 0 ?
        (
          <>
            <div className='pokemon' onClick={() => openModal(pokemon)}>
              <img src={`${POKEMON_ARTWORK_BASE_URL}${pokemon.id}.png`} alt={name}></img>
            </div >
          </>
        ) : <></>
      }
    </>
  )
}

export default Pokemon