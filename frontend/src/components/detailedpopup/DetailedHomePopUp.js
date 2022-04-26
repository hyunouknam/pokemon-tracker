import './detailedpopup.css';
import ReactDom from 'react-dom';
import Select, { createFilter } from 'react-select'
import Pokemon from '../pokemon/Pokemon';

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
          {
            <>
              <p>Type:</p>
              <Select options={currentPokemon.types}
                filterOption={createFilter({ ignoreAccents: false })}
              />
            </>
          }
        </div>
        <div className='pokemon_abilities'>
          {
            <>
              <p>Ability:</p>
              <Select options={currentPokemon.abilities}
                filterOption={createFilter({ ignoreAccents: false })}
              />
            </>
          }
        </div>
        <div className='pokemon_stat'>
          {
            currentPokemon.stats.map((stat) =>
              <div key={stat.stat.name}>
                <p>{stat.stat.name}: {stat.base_stat}</p>
              </div>
            )
          }
        </div>
        <button>Add</button>
        <button onClick={closeModal}>Close</button>
      </div>
    </>,
    document.getElementById('home_pokemon_portal')
  )
}

export default DetailedHomePopUp