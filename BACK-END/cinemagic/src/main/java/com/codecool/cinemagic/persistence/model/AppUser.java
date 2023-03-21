package com.codecool.cinemagic.persistence.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@EqualsAndHashCode
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Entity
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
    private String favoriteMovie;

}
