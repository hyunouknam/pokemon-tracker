package com.example.pokemontracker.Util;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

public class JsonExtractor {

    public JsonExtractor() {

    }

    public List<String> getPokemonNames() {

        // Consume pokemon generation to get pokemon species
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://pokeapi.co/api/v2/pokemon?limit=896";
        String pokemonGeneration = restTemplate.getForObject(url, String.class);
        JSONObject pokemonGenerationJSONObj = new JSONObject(pokemonGeneration);
        JSONArray pokemonSpecies = pokemonGenerationJSONObj.getJSONArray("results");

        // Extract pokemon species to get the names to separately call individual pokemon API calls later
        List<String> pokemonNames = new ArrayList<>();
        for(int i = 0; i < pokemonSpecies.length(); i++) {
            pokemonNames.add(pokemonSpecies.getJSONObject(i).getString("name"));
        }

        return pokemonNames;
    }

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
}
