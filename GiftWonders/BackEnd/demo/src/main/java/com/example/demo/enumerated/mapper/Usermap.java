package com.example.demo.enumerated.mapper;

import com.example.demo.DTO.UserDTO;
import com.example.demo.model.User;

public class Usermap {
    public static UserDTO maptoUserDTO(User u){
        UserDTO userDTO = new UserDTO();
        userDTO.setId(u.getId());
        userDTO.setUsername(u.getUsername());
        userDTO.setEmail(u.getEmail());
        userDTO.setPassword(u.getPassword());
        userDTO.setRole(u.getRole());
        return userDTO;
    }
    public static User maptoUser(UserDTO u){
        User user = new User();
        user.setId(u.getId());
        user.setUsername(u.getUsername());
        user.setEmail(u.getEmail());
        user.setPassword(u.getPassword());
        user.setRole(u.getRole());
        return user;
    }

}
//entity->controller->mapper->service