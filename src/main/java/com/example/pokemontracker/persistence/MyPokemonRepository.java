package com.example.pokemontracker.persistence;


import com.example.pokemontracker.model.MyPokemon;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MyPokemonRepository extends MongoRepository<MyPokemon, String> {

}
