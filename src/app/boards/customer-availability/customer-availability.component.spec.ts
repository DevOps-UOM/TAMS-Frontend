import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAvailabilityComponent } from './customer-availability.component';

describe('CustomerAvailabilityComponent', () => {
  let component: CustomerAvailabilityComponent;
  let fixture: ComponentFixture<CustomerAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
