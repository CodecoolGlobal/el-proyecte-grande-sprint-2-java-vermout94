package com.codecool.cinemagic.communication.endpoint;
import com.codecool.cinemagic.persistence.model.AppUser;
import com.codecool.cinemagic.service.AppUserService;
import com.codecool.cinemagic.service.security.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("api/authentication")
@RequiredArgsConstructor
public class AuthenticationEndpoint {
    private final AuthenticationService authenticationService;
    private final AppUserService appUserService;

    @PostMapping("signup")
    public void signup(@RequestBody @Validated AppUser appUser) {
        if (appUserService.checkIfUserAlreadyExists(appUser.getEmail())) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "A user with the mail " + appUser.getEmail() + " already exists!"
            );
        }
        appUserService.saveAppUser(appUser);
    }

    @PostMapping("{userId}/favorite-movies/{movieId}")
    public void addFavoriteMovie(@PathVariable long userId, @PathVariable long movieId) {
        appUserService.addFavoriteMovie(userId, movieId);
    }

    /*todo ask el for database user check
     *  + ask el where to store the keys and how to remove them from git (gitguardian useful???)*/
    @PostMapping("login")
    public String login(Authentication authentication) {
        System.out.println("User logged in: " + authentication.getName());
        return authenticationService.login(authentication);
    }
}
