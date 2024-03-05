package com.example.demo.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.DTO.ThemeDTO;
import com.example.demo.service.Themeservice;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/theme")
public class Themecontroller {
    private Themeservice th;

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<ThemeDTO> postMethodName(@RequestBody ThemeDTO entity) {
        ThemeDTO saved=th.createTheme(entity);
        return new ResponseEntity<>(saved,HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<ThemeDTO> getMethodName(@PathVariable("id") Long themeid) {
        ThemeDTO u=th.getThemeById(themeid);
        return ResponseEntity.ok(u);
    }
    @GetMapping
    public ResponseEntity<List<ThemeDTO>> getMethodName() {
        List<ThemeDTO> us=th.getAllThemes();
        return ResponseEntity.ok(us);
    }
    @PutMapping("{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<ThemeDTO> updateTheme(@PathVariable("id") Long themeId, @RequestBody ThemeDTO themeDto) {
        ThemeDTO updatedtheme = th.updateTheme(themeId, themeDto);
        return ResponseEntity.ok(updatedtheme);
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteTheme(@PathVariable("id") Long themeId) {
        th.deleteTheme(themeId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
