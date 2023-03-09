package com.codecool.cinemagic.service;

import com.codecool.cinemagic.model.AppUser;
import com.codecool.cinemagic.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
@CrossOrigin
public class AppUserService {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private AppUserRepository appUserRepository;

    private void encodePassword(AppUser appUser) {
        String encodedPassword = bCryptPasswordEncoder.encode(appUser.getPassword());
        appUser.setPassword(encodedPassword);
    }

    public ResponseEntity<String> createUser(AppUser appUser) {
        AppUser existingUser = appUserRepository.findByEmail(appUser.getEmail());
        if (existingUser != null) {
            String message = "User with email " + appUser.getEmail() + " already exists";
            return ResponseEntity.badRequest().body(message);
        }

        encodePassword(appUser);
        appUserRepository.save(appUser);

        String message = "User with email " + appUser.getEmail() + " created successfully";
        return ResponseEntity.ok().body(message);
    }
}

