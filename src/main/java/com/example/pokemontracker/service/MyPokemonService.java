package com.example.pokemontracker.service;

import com.example.pokemontracker.model.MyPokemon;
import com.example.pokemontracker.persistence.MyPokemonRepository;
import com.example.pokemontracker.user.CustomUserDetails;
import com.example.pokemontracker.user.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MyPokemonService {

    @Autowired
    private MyPokemonRepository repository;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    public void addMyPokemon(MyPokemon myPokemon) {
        myPokemon.setUser(getCurrentUserDetails().getUser());
        repository.save(myPokemon);
    }

    public List<MyPokemon> getAllMyPokemon() {
        return repository.findAllByUser_Id(getCurrentUserDetails().getUser().getId());
    }

    public void updateMyPokemon(MyPokemon myPokemon) {
        MyPokemon currentPokemon = repository.getById(myPokemon.getId());
        if(currentPokemon.getUser().getId() == getCurrentUserDetails().getUser().getId()){
            myPokemon.setUser(getCurrentUserDetails().getUser());
            repository.save(myPokemon);
        }
    }

    public void deleteMyPokemon(MyPokemon myPokemon) {
        MyPokemon currentPokemon = repository.getById(myPokemon.getId());
        if(currentPokemon.getUser().getId() == getCurrentUserDetails().getUser().getId()){
            repository.deleteById(myPokemon.getId());
        }
    }

    // helper function to get current logged user
    private CustomUserDetails getCurrentUserDetails() {
        String userPrincipal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        CustomUserDetails userDetails = (CustomUserDetails) userDetailsService.loadUserByUsername(userPrincipal);
        return userDetails;
    }
}
