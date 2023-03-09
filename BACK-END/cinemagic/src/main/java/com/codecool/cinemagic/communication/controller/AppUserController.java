package com.codecool.cinemagic.communication.controller;
import com.codecool.cinemagic.model.AppUser;
import com.codecool.cinemagic.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/users")
public class AppUserController {
    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @PostMapping("signup")
    public AppUser signup(@RequestBody AppUser appUser) {
        String encodedPassword = bCryptPasswordEncoder.encode(appUser.getPassword());
        appUser.setPassword(encodedPassword);
        return appUserRepository.save(appUser);
    }
}
