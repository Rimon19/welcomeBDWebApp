import { hotel } from './../Model/hotel';
import { HotelService } from './../hotel.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-hotel-list-page',
  templateUrl: './hotel-list-page.component.html',
  styleUrls: ['./hotel-list-page.component.css']
})
export class HotelListPageComponent implements OnInit {

  hotels:hotel[]=[];
  constructor(private hotelList:HotelService) {
   this.getHotels();
   }

  ngOnInit() {
  }
getHotels() {
    // Use snapshotChanges().map() to store the key
    this.hotelList.getHotels().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(c => {
      this.hotels = c;
      console.log(this.hotels);
    });
   
  }
  
}
