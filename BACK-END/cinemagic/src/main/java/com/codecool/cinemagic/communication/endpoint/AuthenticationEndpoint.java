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
@CrossOrigin
@RequestMapping("api/authentication")
@RequiredArgsConstructor
public class AuthenticationEndpoint {
    private final AuthenticationService authenticationService;
    private final AppUserService appUserService;

    @PostMapping("signup")
    public AppUser signup(@RequestBody @Validated AppUser appUser) {
        if (appUserService.checkIfUserAlreadyExists(appUser.getEmail())) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "The username " + appUser.getEmail() + " already exists!"
            );
        }
        return appUserService.saveAppUser(appUser);
    }

    @PostMapping("login")
    public String login(Authentication authentication) {
        return authenticationService.login(authentication);
    }
}
