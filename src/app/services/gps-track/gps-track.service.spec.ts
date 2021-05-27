import { TestBed } from '@angular/core/testing';

import { GpsTrackService } from './gps-track.service';

describe('GpsTrackService', () => {
  let service: GpsTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpsTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
