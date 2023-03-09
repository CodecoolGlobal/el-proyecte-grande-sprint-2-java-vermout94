package com.codecool.cinemagic.communication.controller;


import com.codecool.cinemagic.model.AppUser;
import com.codecool.cinemagic.repository.AppUserRepository;
import com.codecool.cinemagic.service.SignupRequest;
import com.codecool.cinemagic.service.SignupService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;


@RestController
@RequestMapping("api/users")
/*@AllArgsConstructor
@NoArgsConstructor */         //TODO:delete later on
public class AppUserController {
    @Autowired
    private AppUserRepository appUserRepository;

    @PostMapping("signup")
    public AppUser signup(@RequestBody AppUser appUser) {
        return appUserRepository.save(appUser);
    }

   /* @PostMapping("/signup")
    public ResponseEntity<AppUser> signup(@RequestBody AppUser user) {
        // Check if the username already exists
        Optional<AppUser> existingUser = appUserRepository.findByUsername(user.getUsername());
        if (existingUser.isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Username already exists");
        }

        // Encrypt the password
        String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedPassword);

        // Save the user to the database
        AppUser savedUser = appUserRepository.save(user);

        // Return the saved user object in the response body
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }*/
}
