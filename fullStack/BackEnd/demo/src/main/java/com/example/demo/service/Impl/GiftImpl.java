package com.example.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.example.demo.DTO.GiftDTO;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.enumerated.mapper.Giftmap;
import com.example.demo.model.Gift;
import com.example.demo.repository.Giftrepo;
import com.example.demo.service.Giftservice;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class GiftImpl implements Giftservice{
    private Giftrepo gift;
    
    @Override
    public GiftDTO createGift(GiftDTO u){
      Gift r=Giftmap.mapToGift(u);
      Gift saved=gift.save(r);
      return Giftmap.mapToGiftDTO(saved);
    }
    
    @Override
    public GiftDTO getGiftById(Long giftid){
      Gift u=gift.findById(giftid).orElseThrow(()->new ResourceNotFoundException("User is not exist with given id: "+giftid));
      return Giftmap.mapToGiftDTO(u);
    }
    
    @Override
    public List<GiftDTO> getAllGifts(){
      List<Gift> li=gift.findAll();
      List<GiftDTO> lis=new ArrayList<>();
      for(Gift u:li){
        lis.add(Giftmap.mapToGiftDTO(u));
      }
      return lis;
    }
@Override
    public GiftDTO updateGift(Long giftId, GiftDTO Giftdto) {
        Optional<Gift> optionalCourse = gift.findById(giftId);
        Gift existingCourse = optionalCourse.orElseThrow(() ->
                new ResourceNotFoundException("Gift not found with id: " + giftId));

        // Update fields with values from CourseDto
        existingCourse.setGiftid(Giftdto.getGiftid());
        existingCourse.setName(Giftdto.getName());
        existingCourse.setDetails(Giftdto.getDetails());
        existingCourse.setPrice(Giftdto.getPrice());

        // Save the updated entity back to the repository
        Gift updatedgift = gift.save(existingCourse);
        return Giftmap.mapToGiftDTO(updatedgift);
    }

    @Override
    public void deleteGift(Long giftId) {
        gift.deleteById(giftId);
    }
}