package com.example.pokemontracker.util;

import com.example.pokemontracker.model.extraction.Pokemon;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class JsonExtractor {

    RestTemplate restTemplate;

    public JsonExtractor() {
        restTemplate = new RestTemplate();
    }

    public List<String> getPokemonNames() {

        String url = "https://pokeapi.co/api/v2/pokemon?limit=898";
        String pokemonJSON = restTemplate.getForObject(url, String.class);
        JSONObject pokemonJSONObj = new JSONObject(pokemonJSON);
        JSONArray pokemonArr = pokemonJSONObj.getJSONArray("results");

        List<String> pokemonNames = new ArrayList<>();
        for(int i = 0; i < pokemonArr.length(); i++) {
            pokemonNames.add(pokemonArr.getJSONObject(i).getString("name"));
        }

        return pokemonNames;
    }

    public List<String> getPokemonNamesTest() {

        String url = "https://pokeapi.co/api/v2/pokemon?limit=50";
        String pokemonJSON = restTemplate.getForObject(url, String.class);
        JSONObject pokemonJSONObj = new JSONObject(pokemonJSON);
        JSONArray pokemonArr = pokemonJSONObj.getJSONArray("results");

        List<String> pokemonNames = new ArrayList<>();
        for(int i = 0; i < pokemonArr.length(); i++) {
            pokemonNames.add(pokemonArr.getJSONObject(i).getString("name"));
        }

        return pokemonNames;
    }

    public Map<String, Pokemon> getAllPokemonInfo(List<String> pokemonNames) throws JsonProcessingException {
        Map<String, Pokemon> pokemons = new HashMap<>();
        ObjectMapper objectMapper = new ObjectMapper();
        String url;
        String pokemonJSON;
        Pokemon pokemon;
        for(String name : pokemonNames) {
            url = "https://pokeapi.co/api/v2/pokemon/{name}";
            pokemonJSON = restTemplate.getForObject(url, String.class, name);
            pokemon = objectMapper.readValue(pokemonJSON, Pokemon.class);
            pokemons.put(pokemon.getName(), pokemon);
        }
        return pokemons;
    }

    public Pokemon getPokemonInfo(String name) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        String url = "https://pokeapi.co/api/v2/pokemon/{name}";
        String json = restTemplate.getForObject(url, String.class, name);
        Pokemon pokemon = objectMapper.readValue(json, Pokemon.class);
        return pokemon;
    }

    public List<String> getHoldableItems() {
        String url = "https://pokeapi.co/api/v2/item-attribute/holdable";
        String itemJSON = restTemplate.getForObject(url, String.class);
        JSONObject itemJSONObj = new JSONObject(itemJSON);
        JSONArray itemArr = itemJSONObj.getJSONArray("items");

        List<String> itemNames = new ArrayList<>();
        for(int i = 0; i < itemArr.length(); i++) {
            itemNames.add(itemArr.getJSONObject(i).getString("name"));
        }

        return itemNames;
    }
}