package com.codecool.cinemagic.service.security;

//import com.codecool.cinemagic.persistence.model.AppUser;
//import com.codecool.cinemagic.persistence.repository.AppUserRepository;
import org.springframework.security.core.Authentication;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    /*private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;*/
    private final JwtService jwtService;

    public AuthenticationService(JwtService jwtService) {
        /*this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;*/
        this.jwtService = jwtService;
    }

    /*public AppUser signup(AppUser appUser) {
        var user = AppUser.builder()
                .email(appUser.getEmail())
                .password(passwordEncoder.encode(appUser.getPassword()))
                .build();
        return appUserRepository.save(user);
    }*/

    public String login(Authentication authentication) {
        return jwtService.generateToken(authentication);
    }
}