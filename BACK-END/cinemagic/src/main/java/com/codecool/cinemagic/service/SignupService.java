package com.codecool.cinemagic.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SignupService {
    public String signup(SignupRequest request) {
        return "signup works";
    }
}
