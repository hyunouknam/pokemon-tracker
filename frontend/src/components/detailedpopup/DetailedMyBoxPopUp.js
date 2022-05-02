import './detailedpopup.css';
import ReactDom from 'react-dom';
import { useState, useEffect } from 'react';
import pokemonService from '../../services/PokemonService';
import Select, { createFilter } from 'react-select'

const POKEMON_ARTWORK_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const DetailedMyBoxPopUp = ({ currentPokemon, closeModal }) => {

  const [pokemon, setPokemon] = useState({})
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [abilitiesList, setAbilitiesList] = useState([]);
  const [movesList, setMovesList] = useState([]);
  const [initialMovesList, setIntialMovesList] = useState([]);

  useEffect(() => {
    const getPokemonInfo = async () => {
      const response = await pokemonService.getPokemonInfo(currentPokemon.name.toLowerCase());
      setPokemonInfo(response.data);

      const abilities = response.data.abilities.map(ability => {
        return { value: ability.ability.name, label: ability.ability.name };
      });
      const moves = response.data.moves.map(moves => {
        return { value: moves.move.name, label: moves.move.name };
      });
      const initialMoves = currentPokemon.moves.map(move => {
        return { value: move, label: move };
      });

      setAbilitiesList(abilities);
      setMovesList(moves);
      setIntialMovesList(initialMoves);
    }

    getPokemonInfo();
    setPokemon(currentPokemon);
  }, [currentPokemon])

  const handleMoves = (e) => {
    let moves = [];
    e.map((move) => moves.push(move.value));
    setPokemon(prev => ({ ...prev, moves: moves }));
  }

  return ReactDom.createPortal(
    <>
      <div className='overlay' />
      <div className='popup'>
        <div className='pokemon_image'>
          <img src={`${POKEMON_ARTWORK_BASE_URL}${currentPokemon.pokemonId}.png`} alt={currentPokemon.name} />
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
              <Select options={abilitiesList}
                filterOption={createFilter({ ignoreAccents: false })}
                defaultValue={{ value: currentPokemon.ability, label: currentPokemon.ability }}
                onChange={e => setPokemon(prev => ({ ...prev, ability: e.value }))}
              />
            </>
          }
        </div>
        <div className='pokemon_move'>
          {
            <>
              <p>Moves:</p>
              <Select options={movesList}
                filterOption={createFilter({ ignoreAccents: false })}
                isMulti
                menuPlacement="top"
                defaultValue={initialMovesList}
                onChange={(e) => handleMoves(e)}
              />
            </>
          }
        </div>
        <div className='pokemon_stats'>
          <div className='hp pokemon_stat'>
            <p>HP:</p>
            <input
              placeholder={currentPokemon.hp}
              defaultValue={currentPokemon.hp}
            //onChange={e => setHp(Number(e.target.value))}
            />
          </div>
          <div className='attack pokemon_stat'>
            <p>Attack:</p>
            <input
              placeholder={currentPokemon.attack}
              defaultValue={currentPokemon.attack}
            //onChange={e => setAttack(Number(e.target.value))}
            />
          </div>
          <div className='defense pokemon_stat'>
            <p>Defense:</p>
            <input
              placeholder={currentPokemon.defense}
              defaultValue={currentPokemon.defense}
            //onChange={e => setDefense(Number(e.target.value))}
            />
          </div>
          <div className='special_attack pokemon_stat'>
            <p>Special Attack:</p>
            <input
              placeholder={currentPokemon.special_attack}
              defaultValue={currentPokemon.special_attack}
            //onChange={e => setSpecialAttack(Number(e.target.value))}
            />
          </div>
          <div className='special_defense pokemon_stat'>
            <p>Special Defense:</p>
            <input
              placeholder={currentPokemon.special_defense}
              defaultValue={currentPokemon.special_defense}
            //onChange={e => setSpecialDefense(Number(e.target.value))}
            />
          </div>
          <div className='speed pokemon_stat'>
            <p>Speed:</p>
            <input
              placeholder={currentPokemon.speed}
              defaultValue={currentPokemon.speed}
            //onChange={e => setSpeed(Number(e.target.value))}
            />
          </div>
        </div>
        <div className='button'>
          <button>Save</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </>,
    document.getElementById('mybox_pokemon_portal')
  )
}

export default DetailedMyBoxPopUp