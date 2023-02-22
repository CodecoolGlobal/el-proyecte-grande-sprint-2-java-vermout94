package com.codecool.cinemagic.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin
@RestController
@RequestMapping("/cinemagic")
public class TestController {
    @GetMapping("/test")
    public String index() {
        String message = "RAFFI, CAN YOU READ THIS?";
        return message;
    }
}
