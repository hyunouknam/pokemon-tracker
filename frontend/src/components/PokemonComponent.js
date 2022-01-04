import React, { useEffect, useState } from 'react'
import Select, { createFilter } from 'react-select'
import PokemonService from '../services/PokemonService'

function PokemonComponent() {

    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState({})
    const [pokemonList, setPokemonList] = useState([])
    const [ability, setAbility] = useState([])
    const [moves, setMoves] = useState([])

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
        const arr = [];
        selectedPokemon.abilities.forEach(abilities => {
            arr.push({label:abilities.ability.name, value:abilities.ability.name});
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
        const arr = [];
        selectedPokemon.stats.forEach(stats => {
            arr.push({label:stats.stat.name, value:stats.stat.name});
        });
        return arr;
    }

    const getTypes = () => {
        const arr = selectedPokemon.types.map(selectedPokemon => {
            return selectedPokemon.type.name;
        });
        return arr;
    }

    const setMyPokemon = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(ability));
        console.log(JSON.stringify(moves));
        console.log("here");
    }

    return (
        <div className='container'>
            <h1 className='text-center'> Pokemon List </h1>
                <h2>Name</h2>
                {       
                <Select options={pokemonList} 
                        filterOption={createFilter({ignoreAccents: false})} 
                        onChange={getPokemonData}/>
                }
                
                <form onSubmit={setMyPokemon}>

                    <h2>Ability</h2>
                    {
                        Object.keys(selectedPokemon).length > 0 && <Select options={getAbilities()}
                                                                           onChange={(value) => setAbility(value)}/>
                    }
                    <h2>Moves</h2>
                    {
                        Object.keys(selectedPokemon).length > 0 && <Select options={getMoves()} 
                                                                           isMulti
                                                                           onChange={(value) => setMoves(value)}/>
                    }
                    {
                        Object.keys(selectedPokemon).length > 0 && getTypes().map(type => {
                            return <h2>{type}</h2>
                        })
                    }
                    
                    <input type="submit" value = "Add" />
                </form>

        </div>
    )
}

export default PokemonComponent