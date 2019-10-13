
import { Component, OnInit } from '@angular/core';
import { HotelPlace } from '../Model/hotel-place';
import { HotelPlaceService } from '../hotel-place.service';

@Component({
  selector: 'app-hotel-place',
  templateUrl: './hotel-place.component.html',
  styleUrls: ['./hotel-place.component.css']
})
export class HotelPlaceComponent implements OnInit {

  Place=new HotelPlace();
  constructor(private placeService:HotelPlaceService) { }

 
save(objHotelPlace){
  
  this.placeService.create(objHotelPlace);
  
}
ngOnInit() {
}
}
