package com.codecool.cinemagic.communication.controller;
import com.codecool.cinemagic.model.AppUser;
import com.codecool.cinemagic.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/users")
public class AppUserController {
    @Autowired
    private AppUserRepository appUserRepository;

    @PostMapping("signup")
    public AppUser signup(@RequestBody AppUser appUser) {
        return appUserRepository.save(appUser);
    }

   /* This is just needed reference for later
   @PostMapping("/signup")
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
