import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailFormComponent } from './customer-detail-form.component';

describe('CustomerDetailFormComponent', () => {
  let component: CustomerDetailFormComponent;
  let fixture: ComponentFixture<CustomerDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
