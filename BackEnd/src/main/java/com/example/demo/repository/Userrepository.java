package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User;

public interface Userrepository extends JpaRepository<User,Long> {
    Optional<User> findByUsername(String username);
}