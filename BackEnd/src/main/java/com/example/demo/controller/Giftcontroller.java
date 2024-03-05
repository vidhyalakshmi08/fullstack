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
import com.example.demo.DTO.GiftDTO;
import com.example.demo.service.Giftservice;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/gift")
public class Giftcontroller {
    private Giftservice gift;

    @PostMapping("/addgift")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<GiftDTO> postMethodName(@RequestBody GiftDTO entity) {
        GiftDTO saved=gift.createGift(entity);
        return new ResponseEntity<>(saved,HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<GiftDTO> getMethodName(@PathVariable("id") Long giftid) {
        GiftDTO u=gift.getGiftById(giftid);
        return ResponseEntity.ok(u);
    }
    @GetMapping
    public ResponseEntity<List<GiftDTO>> getMethodName() {
        List<GiftDTO> us=gift.getAllGifts();
        return ResponseEntity.ok(us);
    }
    @PutMapping("{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<GiftDTO> updateGift(@PathVariable("id") Long giftId, @RequestBody GiftDTO giftDto) {
        GiftDTO updatedgift = gift.updateGift(giftId, giftDto);
        return ResponseEntity.ok(updatedgift);
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deletegift(@PathVariable("id") Long giftId) {
        gift.deleteGift(giftId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
