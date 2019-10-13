
import { HotelService } from './hotel.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { HotelInputComponent } from './hotel-input/hotel-input.component';
import { RoomInputComponent } from './room-input/room-input.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppHederComponent } from './app-heder/app-heder.component';
import { environment } from '../environments/environment';
import { HotelPlaceComponent } from './hotel-place/hotel-place.component';
import { RestuarentComponent } from './restuarent/restuarent.component';
import { HotelPlaceService } from './hotel-place.service';
import { RoomService } from './room.service';
import { NationalAnthemComponent } from './national-anthem/national-anthem.component';
import { TravelnewsFeedComponent } from './travelnews-feed/travelnews-feed.component';
import { NewsSinglePageComponent } from './news-single-page/news-single-page.component';
import { BDATAGlanceComponent } from './bdataglance/bdataglance.component';
import { HistoryOfBDComponent } from './history-of-bd/history-of-bd.component';
import { CulRelLanBDComponent } from './cul-rel-lan-bd/cul-rel-lan-bd.component';
import { GeographyComponent } from './geography/geography.component';
import { ShowHotelsComponent } from './show-hotels/show-hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelListPageComponent } from './hotel-list-page/hotel-list-page.component';
import { NewspageTwoComponent } from './newspage-two/newspage-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelInputComponent,
    RoomInputComponent,
    PageNotFoundComponent,
    AppHederComponent,
    HotelPlaceComponent,
    RestuarentComponent,
    NationalAnthemComponent,
    TravelnewsFeedComponent,
    NewsSinglePageComponent,
    BDATAGlanceComponent,
    HistoryOfBDComponent,
    CulRelLanBDComponent,
    GeographyComponent,
    ShowHotelsComponent,
    HotelDetailsComponent,
    HotelListPageComponent,
    NewspageTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'hotel',
        component: HotelInputComponent
      },
      {
        path: 'show-hotels',
        component: ShowHotelsComponent
      },
      {
        path: 'hotel-details/:id',
        component: HotelDetailsComponent
      },
      {
        path: 'hotel-list-page',
        component: HotelListPageComponent
      },
      {
        path: 'room/:id',
        component: RoomInputComponent
      },
      {
        path: 'hotel-place',
        component: HotelPlaceComponent
      },
      {
        path: 'resturent',
        component: RestuarentComponent
      },
      {
        path: 'nationalAnthem',
        component: NationalAnthemComponent
      },
      {
        path: 'travelnewsfeed',
        component: TravelnewsFeedComponent
      },
      {
        path: 'news-detail-1',
        component: NewsSinglePageComponent
      },
      {
        path: 'news-detail-2',
        component: NewspageTwoComponent
      },
      {
        path: 'Bd-At-a-glance',
        component: BDATAGlanceComponent
      },
      {
        path: 'history',
        component: HistoryOfBDComponent
      },
      {
        path: 'geography',
        component: GeographyComponent
      },
      {
        path: 'culture-religion-language',
        component: CulRelLanBDComponent
      },

      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  providers: [
    HotelService,
    RoomService,
    HotelPlaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
