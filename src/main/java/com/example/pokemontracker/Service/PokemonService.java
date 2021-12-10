package com.example.pokemontracker.Service;

import com.example.pokemontracker.Model.MyPokemon;
import com.example.pokemontracker.Repository.MyPokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {

    @Autowired
    MyPokemonRepository repository;

    public void addMyPokemon(String name, String ability, String move1, String move2, String move3, String move4,
                             int hp, int attack, int defense, int special_attack, int special_defense, int speed) {
        MyPokemon myPokemon = new MyPokemon(name, ability, move1, move2, move3, move4,
                                            hp, attack, defense, special_attack, special_defense, speed);
        repository.save(myPokemon);
    }
}
