import './detailedpopup.css';
import ReactDom from 'react-dom';
import Select, { createFilter } from 'react-select'
import { useState, useEffect } from 'react';
import pokemonService from '../../services/PokemonService';

const POKEMON_ARTWORK_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const DetailedHomePopUp = ({ currentPokemon, isModalOpen, closeModal, token }) => {

  const [pokemonId, setPokemonId] = useState(currentPokemon.id);
  const [name, setName] = useState("");
  const [types, setTypes] = useState([]);
  const [ability, setAbility] = useState("");
  const [moves, setMoves] = useState([]);
  const [hp, setHp] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [specialAttack, setSpecialAttack] = useState(0);
  const [specialDefense, setSpecialDefense] = useState(0);
  const [speed, setSpeed] = useState(0);

  /*
  useEffect(() => {
    setPokemonId(currentPokemon.id);
    setName(currentPokemon.name);
    setTypes(currentPokemon.types);
    setAbility(currentPokemon.abilities[0].value);
    // moves can be empty by default
    // stats are hp, attack, defense, special_attack, special_defense, speed in order in array
    setHp(currentPokemon.stats[0].base_stat);
    setAttack(currentPokemon.stats[1].base_stat);
    setDefense(currentPokemon.stats[2].base_stat);
    setSpecialAttack(currentPokemon.stats[3].base_stat);
    setSpecialDefense(currentPokemon.stats[4].base_stat);
    setSpeed(currentPokemon.stats[5].base_stat);
  }, [currentPokemon])
  */

  const handleMoves = (e) => {
    let moves = [];
    e.map((move) => moves.push(move.value));
    setMoves(moves);
  }

  const addPokemon = async () => {
    await pokemonService.addMyPokemon(pokemonId, name, types, ability, moves, hp, attack, defense, specialAttack, specialDefense, speed, token);

    // Show that pokemon was added to my box
  }

  if (isModalOpen !== true) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div className='overlay' />
      <div className='popup'>
        <div className='pokemon_image'>
          <img src={`${POKEMON_ARTWORK_BASE_URL}${currentPokemon.id}.png`} alt={currentPokemon.name} />
        </div>
        <div className='pokemon_name'>
          {
            currentPokemon.name
          }
        </div>
        <div className='pokemon_type'>
          <p>Type: </p>
          {
            currentPokemon.types.map((type) =>
              <p key={type}>{type}</p>
            )
          }
        </div>
        <div className='pokemon_ability'>
          {
            <>
              <p>Ability:</p>
              <Select options={currentPokemon.abilities}
                filterOption={createFilter({ ignoreAccents: false })}
                placeholder="Select an ability"
                onChange={e => setAbility(e.value)}
              />
            </>
          }
        </div>
        <div className='pokemon_move'>
          {
            <>
              <p>Moves:</p>
              <Select options={currentPokemon.moves}
                filterOption={createFilter({ ignoreAccents: false })}
                isMulti
                menuPlacement="top"
                placeholder="Select moves"
                onChange={(e) => handleMoves(e)}
              />
            </>
          }
        </div>
        <div className='pokemon_stat'>
          {
            currentPokemon.stats.map((stat) =>
              <div className='pokemon_stat_list' key={stat.stat.name}>
                <p>{stat.stat.name}:</p>
                <input placeholder={stat.base_stat} defaultValue={stat.base_stat} />
              </div>
            )
          }
        </div>
        <div className='button'>
          <button onClick={addPokemon}>Add</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </>,
    document.getElementById('home_pokemon_portal')
  )
}

export default DetailedHomePopUp