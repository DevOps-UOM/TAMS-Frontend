import { TestBed } from '@angular/core/testing';

import { FormControllService } from './form-controll.service';

describe('FormControllService', () => {
  let service: FormControllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
