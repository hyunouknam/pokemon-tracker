package com.example.pokemontracker.Controller;

import com.example.pokemontracker.Model.Extraction.Pokemon;
import com.example.pokemontracker.Model.MyPokemon;
import com.example.pokemontracker.Service.PokemonService;
import com.example.pokemontracker.Util.JsonExtractor;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000/")
public class ApiController {

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
    public void postPokemon(@RequestBody MyPokemon myPokemon) {
        // add nature later
        MyPokemon selected = new MyPokemon(myPokemon.getName(), myPokemon.getAbility(), myPokemon.getMoves(),
                myPokemon.getHp(), myPokemon.getAttack(), myPokemon.getDefense(), myPokemon.getSpecial_attack(), myPokemon.getSpecial_defense(), myPokemon.getSpeed());

        service.addMyPokemon(selected);

    }

    @GetMapping(value = "/my-pokemon")
    public List<MyPokemon> getMyPokemon() {
        return service.getAllMyPokemon();
    }

    @PutMapping(value = "/my-pokemon")
    public void putPokemon(@RequestBody MyPokemon myPokemon) {
        service.updatePokemon(myPokemon);
    }

}
