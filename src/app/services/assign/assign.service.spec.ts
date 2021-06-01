import { TestBed } from '@angular/core/testing';

import { AssignService } from './assign.service';

describe('AssignService', () => {
  let service: AssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
