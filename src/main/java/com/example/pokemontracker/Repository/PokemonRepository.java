package com.example.pokemontracker.Repository;


import com.example.pokemontracker.Model.Extraction.Pokemon;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PokemonRepository extends MongoRepository<Pokemon, String> {


}
