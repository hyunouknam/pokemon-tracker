package com.example.pokemontracker.model;

import com.example.pokemontracker.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class MyPokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(name = "pokemonId")
    private long pokemonId;
    @Column(name = "name")
    private String name;
    @Column(name = "ability")
    private String ability;
    @ElementCollection
    @CollectionTable(name = "types_list", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "types")
    private List<String> types;
    @ElementCollection
    @CollectionTable(name = "moves_list", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "moves")
    private List<String> moves;
    @Column(name = "hp")
    private int hp;
    @Column(name = "attack")
    private int attack;
    @Column(name = "defense")
    private int defense;
    @Column(name = "special_attack")
    private int special_attack;
    @Column(name = "special_defense")
    private int special_defense;
    @Column(name = "speed")
    private int speed;
    @Column(name = "held_item")
    private String heldItem;
    @JsonIgnore
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public MyPokemon() {

    }

    public MyPokemon(long pokemonId, String name, String ability, List<String> moves, List<String> types,
                     int hp, int attack, int defense, int special_attack, int special_defense, int speed, String heldItem) {
        this.name = name;
        this.ability = ability;
        this.moves = moves;
        this.types = types;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.special_attack = special_attack;
        this.special_defense = special_defense;
        this.speed = speed;
        this.heldItem = heldItem;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getPokemonId() {
        return pokemonId;
    }

    public void setPokemonId(long pokemonId) {
        this.pokemonId = pokemonId;
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

    public void setMoves(List<String> moves) {
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getHeldItem() {
        return heldItem;
    }

    public void setHeldItem(String heldItem) {
        this.heldItem = heldItem;
    }

    public List<String> getTypes() {
        return types;
    }

    public void setTypes(List<String> types) {
        this.types = types;
    }
}
