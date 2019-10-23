import { RestuarentService } from './../restuarent.service';
import { HotelPlace } from './../Model/hotel-place';
import { HotelPlaceService } from './../hotel-place.service';
import { HotelService } from './../hotel.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { hotel } from '../Model/hotel';
import { Search } from '../Model/search';
import { Resturent } from '../Model/reaturent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objHotels:hotel[]=[];
  objRestuarents:Resturent[]=[];
  objHotelPlaces:HotelPlace[]=[];
  initObject;
  filteredObjects;
  IsFirstInput:Boolean;
  // resultArray:Array<HotelPlace>=[];
  searching : Search[]=[];

  constructor(private router:Router,
    private hotels:HotelService,
    private hotelsPlaces:HotelPlaceService,
    private restuarentService:RestuarentService) { 
      
      this.getHotels();
      this.getHotelPlaces();
     this.getRestuarent();
      // Array<HotelPlace> list = new Array<HotelPlace>();
      // list.add( new HotelPlace(1,1,10) );
      // list.add( new HotelPlace(1,2,20) );
    }

  ngOnInit() {
 
  }

  getRestuarent() {
    // Use snapshotChanges().map() to store the key
    this.restuarentService.getRestuarent().snapshotChanges().pipe(
      
    ).subscribe(c => {
      //this.objRestuarents = c;
      this.objRestuarents = [];
          c.forEach(element => {
            var y = element.payload.toJSON();
            y["key"] = element.key; 
                               
                   this.objRestuarents.push(y as Resturent);
                      
          });           
    });

   
  }

  getHotels() {
    // Use snapshotChanges().map() to store the key
    this.hotels.getHotels().snapshotChanges().pipe(
      // map(changes =>
      //   changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      // )
    ).subscribe(c => {
     
      this.objHotels = [];
      c.forEach(element => {
        var y = element.payload.toJSON();
        y["key"] = element.key; 
                           
               this.objHotels.push(y as hotel);
                  
      });   
    });

   
  }
  

  getHotelPlaces() {
    // Use snapshotChanges().map() to store the key
    this.hotelsPlaces.getHotels().snapshotChanges().pipe(
      //map(changes =>
      //  changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    .subscribe(c => {
    //  this.objHotelPlaces= c;
    this.objHotelPlaces = [];
    c.forEach(element => {
      var y = element.payload.toJSON();
      y["key"] = element.key; 
                         
             this.objHotelPlaces.push(y as HotelPlace);
                
    });   
    });
    
      
  }


      GetHotelPlaceAndRestuarent(){
        
        this.objHotels.forEach(i=>{ 
          this.searching.push(
          {
            key:i.key,
           title:i.name,
           IsItPlaceOrRestuarentOrHotel:1
           
          });
       });
       
       this.objHotelPlaces.forEach(i=>{ 
        this.searching.push(
        {
          key:i.key,
         title:i.placename,
         IsItPlaceOrRestuarentOrHotel:2
         
        });
     });

      this.objRestuarents.forEach(i=>{ 
      this.searching.push(
      {
        key:i.key,
       title:i.resturantname,
       IsItPlaceOrRestuarentOrHotel:3
       
      });
   });


      }


    InputSearch(search: string) {
     
    if(search.length==1&&this.IsFirstInput!=true) {
    
      this.GetHotelPlaceAndRestuarent();
       this.IsFirstInput=true;
       console.log(this.searching);
    }
      
      if(search!=null&&search!=""){
      
        let filteredObjects = (search) ?
        this.searching.filter(p => p.title.toLowerCase()
        .includes(search.toLowerCase())) :
         this.initObject;      
         this.filteredObjects=filteredObjects;

      }

      // console.log(this.hotelPlaces);
      // console.log(this.objects);
      // console.log(this.filteredObjects);
     
      // for (let index = 0; index < this.objects.length; index++) {
      //  const e = this.objects[index].name;
        
      // }

      // for (let index = 0; index < this.hotelPlaces.length; index++) {
      //   const e = this.hotelPlaces[index].placename;
        
      // }

       // const newArray = this.hotelPlaces.map(o => {
      //   return { name: o.placename};
      // });
      
    }
}
