import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import PokemonService from '../services/PokemonService'

function PokemonComponent() {

    const dog = "dog";
    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState({})

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = async () => {
        PokemonService.getPokemonList().then((response) => {
            setPokemons(response.data);
        });
    };

    const getPokemonData = (option) => {
        PokemonService.getPokemonInfo(option.value).then((response) => {
            setSelectedPokemon(response.data);
        });
    };


    const setMyPokemon = () => {

    }
/*
    {
        x.abilities.map(e => {
            return <div>
                <div>{e.ability.name}</div>
            </div>
            })
    }
*/

    // change pokemon array into array of objects to be usable for react-select
    let pokemonList = [];
    pokemons.forEach(pokemon => 
    pokemonList.push({ label: pokemon, value: pokemon }));

    return (
        <div className='container'>
            <h1 className='text-center'> Pokemon List </h1>
                {       
                <Select options={pokemonList} onChange={getPokemonData}/>
                }

                <h2>{selectedPokemon.name}</h2>

                <h2>{JSON.stringify(selectedPokemon.abilities)}</h2>
                <h2>{JSON.stringify(selectedPokemon.moves)}</h2>
                <h2>{JSON.stringify(selectedPokemon.stats)}</h2>
                <h2>{JSON.stringify(selectedPokemon.types)}</h2>

                <form onSubmit={setMyPokemon}>

                </form>

        </div>
    )
}

export default PokemonComponent