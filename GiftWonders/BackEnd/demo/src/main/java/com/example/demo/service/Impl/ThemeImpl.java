package com.example.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.example.demo.DTO.ThemeDTO;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.enumerated.mapper.Thememap;
import com.example.demo.model.Theme;
import com.example.demo.repository.Themerepo;
import com.example.demo.service.Themeservice;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ThemeImpl implements Themeservice {
    private Themerepo theme;
    
    @Override
    public ThemeDTO createTheme(ThemeDTO u){
      Theme r=Thememap.mapToTheme(u);
      Theme saved=theme.save(r);
      return Thememap.mapToThemeDTO(saved);
    }
    
    @Override
    public ThemeDTO getThemeById(Long themeid){
      Theme u=theme.findById(themeid).orElseThrow(()->new ResourceNotFoundException("User is not exist with given id: "+themeid));
      return Thememap.mapToThemeDTO(u);
    }
    
    @Override
    public List<ThemeDTO> getAllThemes(){
      List<Theme> li=theme.findAll();
      List<ThemeDTO> lis=new ArrayList<>();
      for(Theme u:li){
        lis.add(Thememap.mapToThemeDTO(u));
      }
      return lis;
    }
    @Override
    public ThemeDTO updateTheme(Long themeId, ThemeDTO themeDto) {
        Optional<Theme> optionalCourse = theme.findById(themeId);
        Theme existingCourse = optionalCourse.orElseThrow(() ->
                new ResourceNotFoundException("Theme not found with id: " + themeId));

        // Update fields with values from CourseDto
        existingCourse.setThemeId(themeDto.getThemeId());
        existingCourse.setName(themeDto.getName());
        existingCourse.setPrice(themeDto.getPrice());

        // Save the updated entity back to the repository
        Theme updatedtheme = theme.save(existingCourse);
        return Thememap.mapToThemeDTO(updatedtheme);
    }

    @Override
    public void deleteTheme(Long themeId) {
        theme.deleteById(themeId);
    }
}
