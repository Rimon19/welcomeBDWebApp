import { HotelService } from './../hotel.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-show-hotels',
  templateUrl: './show-hotels.component.html',
  styleUrls: ['./show-hotels.component.css']
})
export class ShowHotelsComponent implements OnInit {
    hotels;
  constructor(private hotelService:HotelService) {
  
    //this.hotels=hotelService.getAll();
   // console.log(this.hotels);
   }


  ngOnInit() {
    this.getHotels();
   
  }

  getHotels() {
    // Use snapshotChanges().map() to store the key
    this.hotelService.getHotels().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(customers => {
      this.hotels = customers;
      
    });
  }
}
