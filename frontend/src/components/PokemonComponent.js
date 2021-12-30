import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import PokemonService from '../services/PokemonService'

function PokemonComponent() {

    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState({})

    const pokemonList = [];

    useEffect(() => {
        getPokemons();
    }, []);

    useEffect(() => {
        populateList();
        console.log(pokemons);
    }, [pokemons])

    const getPokemons = async () => {
        const response = await PokemonService.getPokemonList();
        setPokemons(response.data);
    };

    const getPokemonData = async (option) => {
        const response = await PokemonService.getPokemonInfo(option.value);
        setSelectedPokemon(response.data);
    };

    const populateList = () => {
        // change pokemon array into array of objects to be usable for react-select
        pokemons.forEach(pokemon => 
        pokemonList.push({ label: pokemon, value: pokemon }));
    }

    const getAbilities = () => {
        const arr = selectedPokemon.abilities.map(selectedPokemon => {
            return selectedPokemon.ability.name;
        });
        console.log(arr);
        return arr;
    }

    const getMoves = () => {
        const arr = selectedPokemon.moves.map(selectedPokemon => {
            return selectedPokemon.move.name;
        });
        return arr;
    }

    const getStats = () => {
        const arr = selectedPokemon.stats.map(selectedPokemon => {
            return selectedPokemon.stat.name;
        });
        return arr;
    }

    const getTypes = () => {
        const arr = selectedPokemon.types.map(selectedPokemon => {
            return selectedPokemon.type.name;
        });
        return arr;
    }

    return (
        <div className='container'>
            <h1 className='text-center'> Pokemon List </h1>
                {       
                <Select options={pokemonList} onChange={getPokemonData}/>
                }

                <h2>{selectedPokemon.name}</h2>
                
                <form>
                    {
                        Object.keys(selectedPokemon).length > 0 && <Select options={getAbilities}/>
                    }
                    {Object.keys(selectedPokemon).length > 0 && getAbilities().map(ability => {
                        return <h2>{ability}</h2>
                    })}
                    {Object.keys(selectedPokemon).length > 0 && getMoves().map(move => {
                        return <h2>{move}</h2>
                    })}
                    {Object.keys(selectedPokemon).length > 0 && getStats().map(stat => {
                        return <h2>{stat}</h2>
                    })}
                    {Object.keys(selectedPokemon).length > 0 && getTypes().map(type => {
                        return <h2>{type}</h2>
                    })}
                </form>

        </div>
    )
}

export default PokemonComponent