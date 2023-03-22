package com.codecool.cinemagic.communication.endpoint;

import com.codecool.cinemagic.service.PeopleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("people")
@RequiredArgsConstructor
public class PeopleEndpoint {
    private final PeopleService peopleService;

    @GetMapping("most-popular")
    public String mostPopularPeople() { return peopleService.findMostPopular(); }
}
