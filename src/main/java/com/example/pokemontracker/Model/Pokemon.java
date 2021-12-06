package com.example.pokemontracker.Model;

public class Pokemon {

    long id;
    String name;
    String ability;
    String[] moves;

    public Pokemon() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAbility() {
        return ability;
    }

    public void setAbility(String ability) {
        this.ability = ability;
    }

    public String[] getMoves() {
        return moves;
    }

    public void setMoves(String[] moves) {
        this.moves = moves;
    }
}
