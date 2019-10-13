import { hotel } from './../Model/hotel';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  id;
  hotels:hotel[]=[];
   specificHotelDetails=new hotel();
  filteredObjects;
  constructor(private route: ActivatedRoute,
    private hotelService:HotelService) { 

    this.id = this.route.snapshot.paramMap.get("id");
    this.getHotels();

  }

  ngOnInit() {
  }

 
  getHotels() {
    // Use snapshotChanges().map() to store the key
    this.hotelService.getHotels().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(c => {
      this.hotels = c;

      let filteredObjects = (this.id ) ?
      this.hotels.filter(p => p.key
     .includes(this.id)) :
      this.hotels; 

      filteredObjects.forEach(element => {
        this.specificHotelDetails=element;
      });
    console.log(this.specificHotelDetails);
      
    });
   
  }
  
}
