package com.example.pokemontracker.persistence;

import com.example.pokemontracker.model.MyPokemon;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
class MyPokemonRepositoryTest {

    @Autowired
    private MyPokemonRepository repository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testCreateMyPokemon() {
        MyPokemon myPokemon = new MyPokemon();
        myPokemon.setName("Squirtle");
        List<String> list = Arrays.asList("Water Gun", "Tail Whip", "Tackle", "Shell Shock");
        myPokemon.setMoves(list);
        myPokemon.setAbility("Something");
        myPokemon.setHp(1);
        myPokemon.setAttack(1);
        myPokemon.setDefense(2);
        myPokemon.setSpecial_attack(2);
        myPokemon.setSpecial_defense(3);
        myPokemon.setSpeed(4);

        MyPokemon savedPokemon = repository.save(myPokemon);

        MyPokemon existPokemon = entityManager.find(MyPokemon.class, savedPokemon.getId());

        //assertThat(existPokemon.getName()).isEqualTo(myPokemon.getName());
        assertEquals(myPokemon, existPokemon);
    }
}