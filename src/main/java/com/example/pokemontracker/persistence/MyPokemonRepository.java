package com.example.pokemontracker.persistence;

import com.example.pokemontracker.model.MyPokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyPokemonRepository extends JpaRepository<MyPokemon, Long> {

}
