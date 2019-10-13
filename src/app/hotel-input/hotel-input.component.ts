import { HotelService } from './../hotel.service';
import { hotel } from './../Model/hotel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-input',
  templateUrl: './hotel-input.component.html',
  styleUrls: ['./hotel-input.component.css']
})
export class HotelInputComponent implements OnInit {

   hotel=new hotel();
   
   
  constructor(private hotelService:HotelService) { 
  
  }
  save(objHotel){
     this.hotelService.create(objHotel);
    
  }
  ngOnInit() {
  }

}
