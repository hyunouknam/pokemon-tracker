import './detailedpopup.css';
import ReactDom from 'react-dom';

const POKEMON_ARTWORK_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const DetailedMyBoxPopUp = ({ currentPokemon, isModalOpen, closeModal }) => {
  if (isModalOpen !== true)
    return null;

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
          {
            currentPokemon.types.map((type) =>
              <p key={type}>{type}</p>
            )
          }
        </div>
        <div className='pokemon_abilities'>
          {
            currentPokemon.ability
          }
        </div>
        <button onClick={closeModal}>Close</button>
      </div>
    </>,
    document.getElementById('mybox_pokemon_portal')
  )
}

export default DetailedMyBoxPopUp