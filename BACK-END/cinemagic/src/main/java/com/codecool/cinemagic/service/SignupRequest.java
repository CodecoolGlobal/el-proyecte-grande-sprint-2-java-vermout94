package com.codecool.cinemagic.service;


import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class SignupRequest {
    private final String firstName;
    private final String lastName;
    private final String email;
    private final String password;

}
