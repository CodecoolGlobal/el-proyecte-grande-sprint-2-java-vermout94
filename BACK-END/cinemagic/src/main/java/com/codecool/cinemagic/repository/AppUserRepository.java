package com.codecool.cinemagic.repository;

import com.codecool.cinemagic.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    Optional<AppUser> findByUsername(String username);

    List<AppUser> findByFirstname(String firstname);

    List<AppUser> findByLastname(String lastname);

    List<AppUser> findByEmail(String email);
}
