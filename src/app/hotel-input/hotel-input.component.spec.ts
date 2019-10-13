import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelInputComponent } from './hotel-input.component';

describe('HotelInputComponent', () => {
  let component: HotelInputComponent;
  let fixture: ComponentFixture<HotelInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
