import { TestBed } from '@angular/core/testing';

import { StatDashboardService } from './stat-dashboard.service';

describe('StatDashboardService', () => {
  let service: StatDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
