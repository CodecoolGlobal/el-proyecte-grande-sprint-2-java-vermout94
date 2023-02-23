package com.codecool.cinemagic.controller;


import com.codecool.cinemagic.Service.SignupRequest;
import com.codecool.cinemagic.Service.SignupService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cinemagic/signup")
@AllArgsConstructor
@NoArgsConstructor          //TODO:delete later on
public class SignupController {

    private SignupService signupService;


    public String signup(@RequestBody SignupRequest request) {
        return signupService.signup(request);
    }
}
