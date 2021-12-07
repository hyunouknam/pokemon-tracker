package com.example.pokemontracker.Model.Extraction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Type {

    @JsonIgnoreProperties("url")
    Map<String, String> type;

    public Type() {

    }

    public Map<String, String> getType() {
        return type;
    }

    public void setType(Map<String, String> type) {
        this.type = type;
    }
}
