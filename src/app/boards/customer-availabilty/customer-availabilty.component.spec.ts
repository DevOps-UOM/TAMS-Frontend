import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAvailabiltyComponent } from './customer-availabilty.component';

describe('CustomerAvailabiltyComponent', () => {
  let component: CustomerAvailabiltyComponent;
  let fixture: ComponentFixture<CustomerAvailabiltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAvailabiltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAvailabiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
