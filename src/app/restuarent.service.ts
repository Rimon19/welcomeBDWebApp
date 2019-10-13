import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Resturent } from './Model/reaturent';

@Injectable({
  providedIn: 'root'
})
export class RestuarentService {
  
  private dbPath = '/Restuarent';
  restuarentRef: AngularFireList<Resturent> = null;

  constructor(private db:AngularFireDatabase) { 
    this.restuarentRef = db.list(this.dbPath);
  }
   create(objRestuarent) { 
    return this.db.list('/Restuarent').push(objRestuarent);
  }
  getRestuarent(): AngularFireList<Resturent> {
    return this.restuarentRef;
  }

}
