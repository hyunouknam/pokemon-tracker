package com.example.pokemontracker.user;

import com.example.pokemontracker.UserAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private CustomUserDetailsService userService;

    @PostMapping(value = "/api/register")
    public ResponseEntity postUser(@RequestBody User user) throws Exception {
        try {
            userService.addUser(user);
        } catch(UserAlreadyExistsException e) {
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }

        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping(value = "/api/login")
    public ResponseEntity loginUser(@RequestBody User user) {

        return new ResponseEntity(HttpStatus.OK);
    }

}
