import { hotel } from './Model/hotel';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private dbPath = '/Hotels';
  customersRef: AngularFireList<hotel> = null;

  constructor(private db:AngularFireDatabase) { 
    this.customersRef = db.list(this.dbPath);
  }

  create(objHotel) { 
    return this.db.list('/Hotels').push(objHotel);
  }

  getHotels(): AngularFireList<hotel> {
    return this.customersRef;
  }

 
 
}
