package com.example.pokemontracker.Controller;

import com.example.pokemontracker.Model.Extraction.Pokemon;
import com.example.pokemontracker.Util.JsonExtractor;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ApiController {

    Map<String, Pokemon> pokemons;

    @GetMapping(value = "/pokemon")
    public Map<String, Pokemon> getPokemon() {
        // might check if pokemon exists in cache(arraylist) so that it doesn't unnecessarily do another API call

        JsonExtractor extractor = new JsonExtractor();
        List<String> pokemonNames = extractor.getPokemonNames();
        try {
            pokemons = extractor.getAllPokemonInfo(pokemonNames);
        } catch(JsonProcessingException e){
            System.out.print("error");
        }

        return pokemons;
    }

    @GetMapping(value = "/test")
    public Pokemon test() {
        JsonExtractor extractor = new JsonExtractor();
        Pokemon pokemon = new Pokemon();
        try{
            pokemon = extractor.test();
        } catch(JsonProcessingException e) {
            System.out.print("error");
        }
        return pokemon;
    }
}
