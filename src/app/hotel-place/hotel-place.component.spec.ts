import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPlaceComponent } from './hotel-place.component';

describe('HotelPlaceComponent', () => {
  let component: HotelPlaceComponent;
  let fixture: ComponentFixture<HotelPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
