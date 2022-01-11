package com.example.pokemontracker.user;

import com.example.pokemontracker.UserAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(value = "/api/register")
    public ResponseEntity postUser(@RequestParam User user) throws Exception {
        try {
            userService.addUser(user);
        } catch(UserAlreadyExistsException e) {
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }

        return new ResponseEntity(HttpStatus.OK);
    }

}
