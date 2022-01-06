package com.example.pokemontracker.model.extraction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Ability {

    String is_hidden;
    @JsonIgnoreProperties(value = "url")
    Map<String, String> ability;

    public Ability() {

    }

    public String getIs_hidden() {
        return is_hidden;
    }

    public void setIs_hidden(String is_hidden) {
        this.is_hidden = is_hidden;
    }

    public Map<String, String> getAbility() {
        return ability;
    }

    public void setAbility(Map<String, String> ability) {
        this.ability = ability;
    }
}
