package com.example.pokemontracker.persistence;

import com.example.pokemontracker.model.MyPokemon;
import com.example.pokemontracker.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MyPokemonRepository extends JpaRepository<MyPokemon, Long> {
    List<MyPokemon> findAllByUser(User user);
}
