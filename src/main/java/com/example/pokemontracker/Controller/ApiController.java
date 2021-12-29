package com.example.pokemontracker.Controller;

import com.example.pokemontracker.Model.Extraction.Pokemon;
import com.example.pokemontracker.Model.MyPokemon;
import com.example.pokemontracker.Service.PokemonService;
import com.example.pokemontracker.Util.JsonExtractor;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000/")
public class ApiController {

    Map<String, Pokemon> pokemons;

    @Autowired
    PokemonService service;
    @Autowired
    JsonExtractor extractor;

    @GetMapping(value = "/pokemon-list")
    public List<String> getPokemonList() {
        // might check if pokemon exists in cache(arraylist) so that it doesn't unnecessarily do another API call

        List<String> pokemonNames = extractor.getPokemonNames();

        return pokemonNames;
    }

    @GetMapping(value = "/pokemon-info")
    public Pokemon getPokemon(@RequestParam String name) {
        Pokemon pokemon = new Pokemon();

        try {
            pokemon = extractor.getPokemonInfo(name);
        } catch(JsonProcessingException e) {

        }

        return pokemon;
    }


    @PostMapping(value = "/my-pokemon")
    public void postPokemon(@RequestParam String name,
                            @RequestParam String ability,
                            @RequestParam String move1,
                            @RequestParam String move2,
                            @RequestParam String move3,
                            @RequestParam String move4,
                            @RequestParam int hp,
                            @RequestParam int attack,
                            @RequestParam int defense,
                            @RequestParam int special_attack,
                            @RequestParam int special_defense,
                            @RequestParam int speed) {
        // add nature later

        service.addMyPokemon(name, ability, move1, move2, move3, move4, hp, attack, defense, special_attack, special_defense, speed);

    }

    @GetMapping(value = "/mypokemon")
    public List<MyPokemon> getMyPokemon() {
        return service.getAllMyPokemon();
    }


}
