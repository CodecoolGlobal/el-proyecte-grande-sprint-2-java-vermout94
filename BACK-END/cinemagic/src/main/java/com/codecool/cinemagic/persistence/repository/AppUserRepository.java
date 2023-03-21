package com.codecool.cinemagic.persistence.repository;

import com.codecool.cinemagic.persistence.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    boolean existsByEmail(String email);
    Optional<AppUser> findByEmail(String email);
}
