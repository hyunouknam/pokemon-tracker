import './detailedpopup.css';
import ReactDom from 'react-dom';
import Select, { createFilter } from 'react-select'
import { useState, useEffect } from 'react';
import pokemonService from '../../services/PokemonService';

const POKEMON_ARTWORK_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const DetailedHomePopUp = ({ currentPokemon, closeModal, token }) => {

  const [ability, setAbility] = useState("");
  const [moves, setMoves] = useState([]);
  const [hp, setHp] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [specialAttack, setSpecialAttack] = useState(0);
  const [specialDefense, setSpecialDefense] = useState(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    if (currentPokemon !== null) {
      setHp(currentPokemon.stats[0].base_stat);
      setAttack(currentPokemon.stats[0].base_stat);
      setDefense(currentPokemon.stats[0].base_stat);
      setSpecialAttack(currentPokemon.stats[0].base_stat);
      setSpecialDefense(currentPokemon.stats[0].base_stat);
      setSpeed(currentPokemon.stats[0].base_stat);
      setAbility(currentPokemon.abilities[0].value);
    }
  }, [currentPokemon])


  const handleMoves = (e) => {
    let moves = [];
    e.map((move) => moves.push(move.value));
    setMoves(moves);
  }

  const addPokemon = async () => {
    if (token != null) {
      await pokemonService.addMyPokemon(currentPokemon.id, currentPokemon.name, currentPokemon.types, ability, moves, hp, attack, defense, specialAttack, specialDefense, speed, token);
    }

    // Show that pokemon was added to my box, only add if currently logged on(check if token exists)
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
                defaultValue={currentPokemon.abilities[0]}
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
        <div className='pokemon_stats'>
          <div className='hp pokemon_stat'>
            <p>HP:</p>
            <input
              placeholder={currentPokemon.stats[0].base_stat}
              defaultValue={currentPokemon.stats[0].base_stat}
              onChange={e => setHp(Number(e.target.value))}
            />
          </div>
          <div className='attack pokemon_stat'>
            <p>Attack:</p>
            <input
              placeholder={currentPokemon.stats[1].base_stat}
              defaultValue={currentPokemon.stats[1].base_stat}
              onChange={e => setAttack(Number(e.target.value))}
            />
          </div>
          <div className='defense pokemon_stat'>
            <p>Defense:</p>
            <input
              placeholder={currentPokemon.stats[2].base_stat}
              defaultValue={currentPokemon.stats[2].base_stat}
              onChange={e => setDefense(Number(e.target.value))}
            />
          </div>
          <div className='special_attack pokemon_stat'>
            <p>Special Attack:</p>
            <input
              placeholder={currentPokemon.stats[3].base_stat}
              defaultValue={currentPokemon.stats[3].base_stat}
              onChange={e => setSpecialAttack(Number(e.target.value))}
            />
          </div>
          <div className='special_defense pokemon_stat'>
            <p>Special Defense:</p>
            <input
              placeholder={currentPokemon.stats[4].base_stat}
              defaultValue={currentPokemon.stats[4].base_stat}
              onChange={e => setSpecialDefense(Number(e.target.value))}
            />
          </div>
          <div className='speed pokemon_stat'>
            <p>Speed:</p>
            <input
              placeholder={currentPokemon.stats[5].base_stat}
              defaultValue={currentPokemon.stats[5].base_stat}
              onChange={e => setSpeed(Number(e.target.value))}
            />
          </div>
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