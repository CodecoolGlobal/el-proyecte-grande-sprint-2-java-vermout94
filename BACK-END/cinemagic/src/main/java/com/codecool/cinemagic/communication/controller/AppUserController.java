package com.codecool.cinemagic.communication.controller;
import com.codecool.cinemagic.persistence.model.AppUser;
import com.codecool.cinemagic.service.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/users")
@RequiredArgsConstructor
public class AppUserController {
    private final AppUserService appUserService;

    @PostMapping("signup")
    public AppUser signup(@RequestBody AppUser appUser) {
        return appUserService.saveAppUser(appUser);
    }
}
