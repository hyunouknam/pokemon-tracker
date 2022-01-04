package com.example.pokemontracker.Service;

import com.example.pokemontracker.Model.MyPokemon;
import com.example.pokemontracker.Repository.MyPokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PokemonService {

    @Autowired
    MyPokemonRepository repository;

    public void addMyPokemon(MyPokemon myPokemon) {
        repository.save(myPokemon);
    }

    public List<MyPokemon> getAllMyPokemon() {
        return repository.findAll();
    }

    public void updatePokemon(MyPokemon myPokemon) {
        repository.save(myPokemon);
    }
}
