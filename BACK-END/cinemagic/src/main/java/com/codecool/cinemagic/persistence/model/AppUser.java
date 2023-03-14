package com.codecool.cinemagic.persistence.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;
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
    private String favoriteMovie;
}
