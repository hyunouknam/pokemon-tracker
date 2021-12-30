import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import PokemonService from '../services/PokemonService'

function PokemonComponent() {

    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState({})
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        getPokemons();
    }, []);

    useEffect(() => {
        populateList();
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
        const pokemonList = [];
        pokemons.forEach(pokemon => 
        pokemonList.push({ label: pokemon, value: pokemon }));
        setPokemonList(pokemonList);
    }

    const getAbilities = () => {
        const arr = selectedPokemon.abilities.map(abilities => {
            return abilities.ability.name;
        });
        return arr;
    }

    const getMoves = () => {
        const arr = [];
        selectedPokemon.moves.forEach(moves => {
            arr.push({label:moves.move.name, value:moves.move.name});
        });
        return arr;
    }

    const getStats = () => {
        const arr = selectedPokemon.stats.map(stats => {
            return stats.stat.name;
        });
        return arr;
    }

    const getTypes = () => {
        const arr = selectedPokemon.types.map(types => {
            return types.type.name;
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
                        Object.keys(selectedPokemon).length > 0 && <Select options={getMoves()}/>
                    }
                </form>

        </div>
    )
}

export default PokemonComponent