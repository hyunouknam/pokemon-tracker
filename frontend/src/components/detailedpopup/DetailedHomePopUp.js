import './detailedpopup.css';
import ReactDom from 'react-dom';

const POKEMON_ARTWORK_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const DetailedHomePopUp = ({ currentPokemon, isModalOpen, closeModal }) => {
  if (isModalOpen !== true)
    return null;

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
            currentPokemon.types.map((type) =>
              <p key={type.type.name}>{type.type.name}</p>
            )
          }
        </div>
        <div className='pokemon_abilities'>
          {
            currentPokemon.abilities.map((ability) =>
              <p key={ability.ability.name}>{ability.ability.name}</p>
            )
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
        <button onClick={closeModal}>Close</button>
      </div>
    </>,
    document.getElementById('home_pokemon_portal')
  )
}

export default DetailedHomePopUp