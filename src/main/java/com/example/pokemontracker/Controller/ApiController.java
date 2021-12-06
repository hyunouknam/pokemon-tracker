package com.example.pokemontracker.Controller;

import com.example.pokemontracker.Util.JsonExtractor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApiController {

    @GetMapping(value = "/pokemon")
    public List<String> getPokemon() {
        // might check if pokemon exists in cache(arraylist) so that it doesn't unnecessarily do another API call

        JsonExtractor extractor = new JsonExtractor();

        return extractor.getPokemonNames();
    }
}
