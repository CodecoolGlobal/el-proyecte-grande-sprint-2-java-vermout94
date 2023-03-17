package com.codecool.cinemagic.communication.controller;
import com.codecool.cinemagic.persistence.model.AppUser;
import com.codecool.cinemagic.service.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin
@RequestMapping("api/users")
@RequiredArgsConstructor
public class AppUserController {
    private final AppUserService appUserService;

    @PostMapping("signup")
    public AppUser signup(@RequestBody AppUser appUser) {
        if (appUserService.checkIfUserAlreadyExists(appUser.getEmail())) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "A user with the mail " + appUser.getEmail() + " already exists!"
            );
        }
        return appUserService.saveAppUser(appUser);
    }

    @PostMapping("{userId}/favorite-movies/{movieId}")
    public void addFavoriteMovie(@PathVariable long userId, @PathVariable long movieId) {
        appUserService.addFavoriteMovie(userId, movieId);
    }
}
