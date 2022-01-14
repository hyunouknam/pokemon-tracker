package com.example.pokemontracker.model.extraction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Move {

    @JsonIgnoreProperties(value = "url")
    private Map<String, String> move;

    public Move() {

    }

    public Map<String, String> getMove() {
        return move;
    }

    public void setMove(Map<String, String> move) {
        this.move = move;
    }
}
