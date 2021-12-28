import React, { useEffect, useState } from 'react'
import Select from 'react-select'
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

    // change pokemon array into array of objects to be usable for react-select
    let pokemonList = [];
    pokemons.forEach(pokemon => 
        pokemonList.push({ label: pokemon, value: pokemon }));

    return (
        <div className='container'>
            <h1 className='text-center'> Pokemon List </h1>
                {       
                <Select options={pokemonList} />
                }
        </div>
    )
}

export default PokemonComponent