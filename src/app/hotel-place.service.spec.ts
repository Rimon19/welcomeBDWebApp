import { TestBed, inject } from '@angular/core/testing';

import { HotelPlaceService } from './hotel-place.service';

describe('HotelPlaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelPlaceService]
    });
  });

  it('should be created', inject([HotelPlaceService], (service: HotelPlaceService) => {
    expect(service).toBeTruthy();
  }));
});
