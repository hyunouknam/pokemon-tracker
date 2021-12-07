package com.example.pokemontracker.Model.Extraction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Move {

    @JsonIgnoreProperties(value = "url")
    Map<String, String> move;

    public Move() {

    }

    public Map<String, String> getMove() {
        return move;
    }

    public void setMove(Map<String, String> move) {
        this.move = move;
    }
}
