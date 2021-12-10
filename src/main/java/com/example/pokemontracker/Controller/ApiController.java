package com.example.pokemontracker.Controller;

import com.example.pokemontracker.Model.Extraction.Pokemon;
import com.example.pokemontracker.Service.PokemonService;
import com.example.pokemontracker.Util.JsonExtractor;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ApiController {

    Map<String, Pokemon> pokemons;

    @Autowired
    PokemonService service;

    @GetMapping(value = "/pokemon")
    public List<String> getPokemon() {
        // might check if pokemon exists in cache(arraylist) so that it doesn't unnecessarily do another API call

        JsonExtractor extractor = new JsonExtractor();
        List<String> pokemonNames = extractor.getPokemonNames();

        return pokemonNames;
    }

    /*
    @PostMapping(value = "/pokemon")
    public void postPokemon(@RequestParam String name, String ability, String move1, String move2, String move3, String move4,
                            String hp, String attack, String defense, String special_attack, String special_defense, String speed) {
        // add nature later

    }

     */

}
