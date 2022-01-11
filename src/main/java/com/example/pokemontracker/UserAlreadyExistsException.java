package com.example.pokemontracker;

public class UserAlreadyExistsException extends Exception{
    public UserAlreadyExistsException(String errorMessage) {
        super(errorMessage);
    }
}
