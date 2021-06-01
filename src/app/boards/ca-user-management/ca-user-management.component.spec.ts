import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaUserManagementComponent } from './ca-user-management.component';

describe('CaUserManagementComponent', () => {
  let component: CaUserManagementComponent;
  let fixture: ComponentFixture<CaUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaUserManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
