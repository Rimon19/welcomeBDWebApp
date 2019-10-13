import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private db:AngularFireDatabase) { }

  create(objRoom){
    return this.db.list('/Room').push(objRoom);
  }
  
}

