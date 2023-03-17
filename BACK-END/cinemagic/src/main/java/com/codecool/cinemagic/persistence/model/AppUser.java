package com.codecool.cinemagic.persistence.model;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

/*TODO do we need @EqualsAndHashCode?*/
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
    private String email;
    @NonNull
    private String password;
    /*Maybe change this to ID instead of String*/
    @ElementCollection
    private Set<Long> favoriteMovieIds = new HashSet<>();
}
