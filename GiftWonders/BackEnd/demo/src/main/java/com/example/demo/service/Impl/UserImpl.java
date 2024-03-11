package com.example.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.demo.DTO.UserDTO;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.enumerated.mapper.Usermap;
import com.example.demo.model.User;
import com.example.demo.repository.Userrepository;
import com.example.demo.service.Userservice;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserImpl implements Userservice{
    private Userrepository us;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO createUser(User u){
       u.setPassword(passwordEncoder.encode(u.getPassword()));
        us.save(u);
        return Usermap.maptoUserDTO(u);
    }
    
    @Override
    public UserDTO getUserById(Long userid){
      User u=us.findById(userid).orElseThrow(()->new ResourceNotFoundException("User is not exist with given id: "+userid));
      return Usermap.maptoUserDTO(u);
    }
    
    @Override
    public List<UserDTO> getAllUsers(){
      List<User> li=us.findAll();
      List<UserDTO> lis=new ArrayList<>();
      for(User u:li){
        lis.add(Usermap.maptoUserDTO(u));
      }
      return lis;
    }
  //   public String getUserRole(String username) {
  //     // Fetch user from the database by username
  //     Optional<User> userOptional = us.findByUsername(username);

  //     if (userOptional.isPresent()) {
  //         // If the user is found, return their role
  //         User user = userOptional.get();
  //         return user.getRole(); 
  //         //System.out.println(user.getRole());// Assuming User entity has a 'role' field
  //     } else {
  //         // If user not found, return null or handle appropriately
  //         return null;
  //     }
  // }
}