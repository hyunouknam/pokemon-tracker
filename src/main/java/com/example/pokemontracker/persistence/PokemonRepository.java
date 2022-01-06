package com.example.pokemontracker.persistence;


import com.example.pokemontracker.model.extraction.Pokemon;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PokemonRepository extends MongoRepository<Pokemon, String> {

}
