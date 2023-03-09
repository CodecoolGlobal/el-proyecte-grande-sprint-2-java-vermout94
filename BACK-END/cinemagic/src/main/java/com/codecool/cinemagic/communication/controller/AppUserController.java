package com.codecool.cinemagic.communication.controller;
import com.codecool.cinemagic.model.AppUser;
import com.codecool.cinemagic.repository.AppUserRepository;
import com.codecool.cinemagic.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/users")
public class AppUserController {
    /*@Autowired
    private AppUserRepository appUserRepository;*/
    @Autowired
    private AppUserService appUserService;

    @PostMapping("signup")
    public ResponseEntity<String> signup(@RequestBody AppUser appUser) {
        return appUserService.createUser(appUser);
    }
}
