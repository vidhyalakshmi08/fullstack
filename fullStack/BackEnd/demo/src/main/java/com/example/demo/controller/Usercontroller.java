package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.AuthRequest;
import com.example.demo.DTO.UserDTO;
import com.example.demo.model.User;
import com.example.demo.service.JwtService;
import com.example.demo.service.Userservice;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class Usercontroller {
    private Userservice user;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;
    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping("/adduser")
    public ResponseEntity<UserDTO> postMethodName(@RequestBody User entity) {
        UserDTO u = user.createUser(entity);
        return ResponseEntity.ok(u);
    }
    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping("{id}")
    public ResponseEntity<UserDTO> getMethodName(@PathVariable("id") Long userid) {
        UserDTO u=user.getUserById(userid);
        return ResponseEntity.ok(u);
    }
    @CrossOrigin(origins = "http://localhost:4000")
    @GetMapping
    public ResponseEntity<List<UserDTO>> getMethodName() {
        List<UserDTO> us=user.getAllUsers();
        return ResponseEntity.ok(us);
    }
    
    @CrossOrigin(origins = "http://localhost:4000")
    @PostMapping("/authenticate")
public ResponseEntity<?> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
    try {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

        if (authentication.isAuthenticated()) {
            // Fetch roles from the authenticated user
            Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
            List<String> roles = authorities.stream()
                                            .map(GrantedAuthority::getAuthority)
                                            .collect(Collectors.toList());

            String token = jwtService.generateToken(authRequest.getUsername());
            Map<String, Object> response = new HashMap<>();
            response.put("token", token);
            response.put("roles", roles);

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                                 .body(Collections.singletonMap("message", "Invalid credentials"));
        }
    } catch (UsernameNotFoundException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                             .body(Collections.singletonMap("message", "User not found"));
    } catch (BadCredentialsException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                             .body(Collections.singletonMap("message", "Invalid username or password"));
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                             .body(Collections.singletonMap("message", "Internal server error"));
    }
}


}