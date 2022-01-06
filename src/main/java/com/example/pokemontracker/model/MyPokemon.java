package com.example.pokemontracker.model;

import org.springframework.data.annotation.Id;

import java.util.List;

public class MyPokemon {

    @Id
    String id;
    String name;
    String ability;
    List<String> moves;
    int hp;
    int attack;
    int defense;
    int special_attack;
    int special_defense;
    int speed;

    public MyPokemon() {

    }

    public MyPokemon(String name, String ability, List<String> moves,
                     int hp, int attack, int defense, int special_attack, int special_defense, int speed) {
        this.name = name;
        this.ability = ability;
        this.moves = moves;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.special_attack = special_attack;
        this.special_defense = special_defense;
        this.speed = speed;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public List<String> getMoves() {
        return moves;
    }

    public void setMove1(List<String> moves) {
        this.moves = moves;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public int getAttack() {
        return attack;
    }

    public void setAttack(int attack) {
        this.attack = attack;
    }

    public int getDefense() {
        return defense;
    }

    public void setDefense(int defense) {
        this.defense = defense;
    }

    public int getSpecial_attack() {
        return special_attack;
    }

    public void setSpecial_attack(int special_attack) {
        this.special_attack = special_attack;
    }

    public int getSpecial_defense() {
        return special_defense;
    }

    public void setSpecial_defense(int special_defense) {
        this.special_defense = special_defense;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }
}
