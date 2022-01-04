package com.example.pokemontracker.Repository;


import com.example.pokemontracker.Model.MyPokemon;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MyPokemonRepository extends MongoRepository<MyPokemon, String> {

}
