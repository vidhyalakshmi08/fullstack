package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Theme;

public interface Themerepo extends JpaRepository<Theme,Long>{
    
}
