import './detailedpopup.css';
import ReactDom from 'react-dom';
import Select, { createFilter } from 'react-select'

const POKEMON_ARTWORK_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const DetailedHomePopUp = ({ currentPokemon, isModalOpen, closeModal }) => {
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
              />
            </>
          }
        </div>
        <div className='pokemon_stat'>
          {
            currentPokemon.stats.map((stat) =>
              <div className='pokemon_stat_list' key={stat.stat.name}>
                <p>{stat.stat.name}:</p>
                <input placeholder={stat.base_stat} />
              </div>
            )
          }
        </div>
        <div className='button'>
          <button>Add</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </>,
    document.getElementById('home_pokemon_portal')
  )
}

export default DetailedHomePopUp