package com.example.pokemontracker.controller;

import com.example.pokemontracker.model.extraction.Pokemon;
import com.example.pokemontracker.model.MyPokemon;
import com.example.pokemontracker.service.MyPokemonService;
import com.example.pokemontracker.user.CustomUserDetails;
import com.example.pokemontracker.util.JsonExtractor;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin("http://localhost:3000/")
public class ApiController {

    @Autowired
    MyPokemonService service;
    @Autowired
    JsonExtractor extractor;

    @GetMapping(value = "/get/pokemon-list")
    public List<String> getPokemonList() {
        List<String> pokemonNames = extractor.getPokemonNames();

        return pokemonNames;
    }

    @GetMapping(value = "/get/pokemon-list-test")
    public List<String> getPokemonListTest() {
        List<String> pokemonNames = extractor.getPokemonNamesTest();

        return pokemonNames;
    }

    @GetMapping(value = "/get/pokemon-info")
    public Pokemon getPokemon(@RequestParam String name) {
        Pokemon pokemon = new Pokemon();

        try {
            pokemon = extractor.getPokemonInfo(name);
        } catch(JsonProcessingException e) {

        }

        return pokemon;
    }

    @GetMapping(value = "/get/item-list")
    public List<String> getItemList() {
        List<String> itemNames = extractor.getHoldableItems();

        return itemNames;
    }

    @PostMapping(value = "/post/my-pokemon")
    public void postMyPokemon(@RequestBody MyPokemon myPokemon) {
        // add nature later
        service.addMyPokemon(myPokemon);

    }

    @GetMapping(value = "/get/my-pokemon")
    public List<MyPokemon> getMyPokemon() {
        return service.getAllMyPokemon();
    }

    @PutMapping(value = "/update/my-pokemon")
    public void putMyPokemon(@RequestBody MyPokemon myPokemon) {
        service.updateMyPokemon(myPokemon);
    }

    @DeleteMapping(value = "/delete/my-pokemon")
    public void deleteMyPokemon(@RequestBody MyPokemon myPokemon) {
        service.deleteMyPokemon(myPokemon);
    }

}
