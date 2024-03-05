package com.example.demo.service;

import java.util.List;

import com.example.demo.DTO.GiftDTO;
import com.example.demo.DTO.ThemeDTO;

public interface Giftservice{
    GiftDTO createGift(GiftDTO us);
    GiftDTO getGiftById(Long giftid);
    List<GiftDTO> getAllGifts();
    GiftDTO updateGift(Long giftId,GiftDTO th);
    void deleteGift(Long giftId);
}
