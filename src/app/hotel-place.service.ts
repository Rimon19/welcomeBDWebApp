import { HotelPlace } from './Model/hotel-place';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class HotelPlaceService {

  private dbPath = '/HotelPlace';
  hotelPlacesRef: AngularFireList<HotelPlace> = null;

  constructor(private db:AngularFireDatabase) { 
    this.hotelPlacesRef = db.list(this.dbPath);
  }

  create(objHotelPlace) { 
    return this.db.list('/HotelPlace').push(objHotelPlace);
  }
  getHotels(): AngularFireList<HotelPlace> {
    return this.hotelPlacesRef;
  }
}
