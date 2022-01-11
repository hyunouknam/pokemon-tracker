package com.example.pokemontracker.service;

import com.example.pokemontracker.model.MyPokemon;
import com.example.pokemontracker.persistence.MyPokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MyPokemonService {

    @Autowired
    MyPokemonRepository repository;

    public void addMyPokemon(MyPokemon myPokemon) {
        repository.save(myPokemon);
    }

    public List<MyPokemon> getAllMyPokemon() {
        return repository.findAll();
    }

    public void updateMyPokemon(MyPokemon myPokemon) {
        repository.save(myPokemon);
    }

    public void deleteMyPokemon(MyPokemon myPokemon) {
        repository.deleteById(myPokemon.getId());
    }
}
