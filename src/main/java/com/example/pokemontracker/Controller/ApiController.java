package com.example.pokemontracker.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
public class ApiController {

    @GetMapping(value = "/pokemon")
    public String getPokemon(@RequestParam String name) {
        String url = "https://pokeapi.co/api/v2/pokemon/{name}";
        RestTemplate restTemplate = new RestTemplate();
        String pokemon = restTemplate.getForObject(url, String.class, name);

        return pokemon;
    }
}
