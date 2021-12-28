import React, { useEffect, useState } from 'react'
import PokemonService from '../services/PokemonService'

function PokemonComponent() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {

        PokemonService.getPokemons().then((response) => {
            setPokemons(response.data);
        });
    };

    return (
        <div className='container'>
            <h1 className='text-center'> Pokemon List </h1>
                {       
                pokemons.map(
                    pokemon =>
                        <h2>
                            {pokemon}
                        </h2>
                )}
        </div>
    )
}

export default PokemonComponent