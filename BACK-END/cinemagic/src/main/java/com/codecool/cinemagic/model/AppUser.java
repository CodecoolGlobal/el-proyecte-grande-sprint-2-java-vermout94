package com.codecool.cinemagic.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

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
    private String email;
    @NonNull
    private String password;
    /*Maybe change this to ID instead of String*/
    private String favoriteMovie;
}
