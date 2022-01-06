package com.example.pokemontracker.model.extraction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Stat {

    int base_stat;
    int effort;
    @JsonIgnoreProperties(value = "url")
    Map<String, String> stat;

    public Stat() {

    }

    public int getBase_stat() {
        return base_stat;
    }

    public void setBase_stat(int base_stat) {
        this.base_stat = base_stat;
    }

    public int getEffort() {
        return effort;
    }

    public void setEffort(int effort) {
        this.effort = effort;
    }

    public Map<String, String> getStat() {
        return stat;
    }

    public void setStat(Map<String, String> stat) {
        this.stat = stat;
    }
}
