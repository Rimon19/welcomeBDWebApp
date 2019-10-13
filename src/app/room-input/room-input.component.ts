
import { Component, OnInit } from '@angular/core';
import { Room } from '../Model/room';
import { RoomService } from '../room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-input',
  templateUrl: './room-input.component.html',
  styleUrls: ['./room-input.component.css']
})
export class RoomInputComponent implements OnInit {

   Room=new Room();
   id;

  constructor(private roomService:RoomService,
    private route: ActivatedRoute) { 
      this.id = this.route.snapshot.paramMap.get("id")
    }

 
  save(objRoom){
    objRoom.hotelId=this.id;
     this.roomService.create(objRoom);
  }
  ngOnInit() {
  }
}
