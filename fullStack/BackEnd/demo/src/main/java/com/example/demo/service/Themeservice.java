package com.example.demo.service;

import java.util.List;
import com.example.demo.DTO.ThemeDTO;

public interface Themeservice {
    ThemeDTO createTheme(ThemeDTO us);
    ThemeDTO getThemeById(Long themeid);
    List<ThemeDTO> getAllThemes();
    ThemeDTO updateTheme(Long themeId,ThemeDTO th);
    void deleteTheme(Long themeId);
}
