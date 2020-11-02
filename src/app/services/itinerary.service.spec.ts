import { TestBed } from '@angular/core/testing';

import { ItineraryService } from './itinerary.service';

describe('ItineraryService', () => {
  let service: ItineraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItineraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
