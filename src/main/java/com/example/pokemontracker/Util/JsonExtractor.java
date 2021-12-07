package com.example.pokemontracker.Util;

import com.example.pokemontracker.Model.Pokemon;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

public class JsonExtractor {

    RestTemplate restTemplate;

    public JsonExtractor() {
        restTemplate = new RestTemplate();
    }

    public List<String> getPokemonNames() {

        // Consume pokemon generation to get pokemon species
        String url = "https://pokeapi.co/api/v2/pokemon?limit=896";
        String pokemonJSON = restTemplate.getForObject(url, String.class);
        JSONObject pokemonJSONObj = new JSONObject(pokemonJSON);
        JSONArray pokemonArr = pokemonJSONObj.getJSONArray("results");

        // Extract pokemon species to get the names to separately call individual pokemon API calls later
        List<String> pokemonNames = new ArrayList<>();
        for(int i = 0; i < pokemonArr.length(); i++) {
            pokemonNames.add(pokemonArr.getJSONObject(i).getString("name"));
        }

        return pokemonNames;
    }

    public List<Pokemon> getAllPokemonInfo(List<String> pokemonNames) throws JsonProcessingException {
        List<Pokemon> pokemons = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper();
        String url;
        String pokemonJSON;
        Pokemon pokemon;
        for(String name : pokemonNames) {
            url = "https://pokeapi.co/api/v2/pokemon/{name}";
            pokemonJSON = restTemplate.getForObject(url, String.class, name);
            pokemon = objectMapper.readValue(pokemonJSON, Pokemon.class);
            pokemons.add(pokemon);
        }
        return pokemons;
    }

    public Pokemon test() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        String url = "https://pokeapi.co/api/v2/pokemon/{name}";
        String json = restTemplate.getForObject(url, String.class, "rockruff");
        Pokemon pokemon = objectMapper.readValue(json, Pokemon.class);
        return pokemon;
    }

    /*
    public List<String> getGenFourPokemonNames() {

        // Consume pokemon generation to get pokemon species
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://pokeapi.co/api/v2/generation/generation-iv/";
        String pokemonGeneration = restTemplate.getForObject(url, String.class);
        JSONObject pokemonGenerationJSONObj = new JSONObject(pokemonGeneration);
        JSONArray pokemonSpecies = pokemonGenerationJSONObj.getJSONArray("pokemon_species");

        // Extract pokemon species to get the names to separately call individual pokemon API calls later
        List<String> pokemonNames = new ArrayList<>();
        for(int i = 0; i < pokemonSpecies.length(); i++) {
            pokemonNames.add(pokemonSpecies.getJSONObject(i).getString("name"));
        }

        return pokemonNames;
    }
     */
}