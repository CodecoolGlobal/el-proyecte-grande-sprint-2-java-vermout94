package com.codecool.cinemagic.model.appUser;


//TODO: switch from jakarta -> javax, when dependencies are fixed - stay with jakarta? read up
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue
    private long id;
    @NonNull
    private String username;
    @NonNull
    private String firstname;
    @NonNull
    private String lastname;
    @NonNull
    private String email;
    @NonNull
    private String password;

    private List<String> favouriteMovies;
    @Enumerated(EnumType.STRING)
    private AppUserRole appUserRole;

}
