import { TestBed, inject } from '@angular/core/testing';

import { RestuarentService } from './restuarent.service';

describe('RestuarentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestuarentService]
    });
  });

  it('should be created', inject([RestuarentService], (service: RestuarentService) => {
    expect(service).toBeTruthy();
  }));
});
