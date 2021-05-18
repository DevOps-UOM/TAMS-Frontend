import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinCustomerComponent } from './pin-customer.component';

describe('PinCustomerComponent', () => {
  let component: PinCustomerComponent;
  let fixture: ComponentFixture<PinCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
