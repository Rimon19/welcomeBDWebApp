import { Component, OnInit } from '@angular/core';
import { Resturent } from '../Model/reaturent';
import { RestuarentService } from '../restuarent.service';

@Component({
  selector: 'app-restuarent',
  templateUrl: './restuarent.component.html',
  styleUrls: ['./restuarent.component.css']
})
export class RestuarentComponent implements OnInit {

  Resturant = new Resturent();

  constructor(private restuarent:RestuarentService) {

    

   }

  ngOnInit() {
  }
  save(objResturent) {
    
    this.restuarent.create(objResturent);
  }

  


}
