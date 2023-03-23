package com.codecool.cinemagic.persistence.repository;

import com.codecool.cinemagic.persistence.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;


import java.util.List;
import java.util.Set;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    boolean existsByEmail(String email);
    Optional<AppUser> findByEmail(String email);
    @Query("select u.favoriteMovieIds from AppUser u where u.id = :userId")
    Set<Long> findFavoriteMovieIdsByUserId(@Param("userId") Long userId);

}
