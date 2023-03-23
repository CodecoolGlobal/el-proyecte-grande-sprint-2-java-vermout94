package com.codecool.cinemagic.service;

import com.codecool.cinemagic.persistence.model.AppUser;
import com.codecool.cinemagic.persistence.repository.AppUserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppUserService {
    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;

    public AppUserService(AppUserRepository appUserRepository, PasswordEncoder passwordEncoder) {
        this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public AppUser saveAppUser(AppUser appUser) {
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        return appUserRepository.save(appUser);
    }

    public boolean checkIfUserAlreadyExists(String email) {
        return appUserRepository.existsByEmail(email);
    }

    public void addFavoriteMovie(long userId, long movieId) {
        AppUser appUser = appUserRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found."));
        appUser.getFavoriteMovieIds().add(movieId);
        appUserRepository.save(appUser);
    }

    public List<Long> getFavoriteMovieIds(long userId) {
        return new ArrayList<>(appUserRepository.findFavoriteMovieIdsByUserId(userId));
    }
}

