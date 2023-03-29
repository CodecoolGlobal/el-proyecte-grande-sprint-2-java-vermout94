package com.codecool.cinemagic.persistence.model;

import jakarta.persistence.*;
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
@Builder
@NoArgsConstructor
@AllArgsConstructor

//@Table(name = "app_user")
public class AppUser {
    @Id
    @GeneratedValue
    private long id;
    @NonNull
    @Column(unique = true, nullable = false)
    private String email;
    @NonNull
    @Column(nullable = false)
    private String password;
    /*Maybe change this to ID instead of String*/
    @ElementCollection
    private Set<Long> favoriteMovieIds = new HashSet<>();


    public Set<Long> getFavouriteMovieIds() {
        return favoriteMovieIds;
    }
}
