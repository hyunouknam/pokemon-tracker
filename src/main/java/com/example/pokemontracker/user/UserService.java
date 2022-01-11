package com.example.pokemontracker.user;

import com.example.pokemontracker.UserAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void addUser(User user) throws Exception {
        if(!userRepository.findById(user.getId()).isPresent()) {
            User newUser = new User();
            newUser.setUsername(user.getUsername());
            newUser.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(newUser);
        } else {
            throw new UserAlreadyExistsException("User already exists.");
        }
    }

    public void updateUser(){

    }

    public void getUser(){

    }

    public void deleteUser(){

    }
}
