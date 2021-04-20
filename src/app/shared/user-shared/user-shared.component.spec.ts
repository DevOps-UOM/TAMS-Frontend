import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSharedComponent } from './user-shared.component';

describe('UserSharedComponent', () => {
  let component: UserSharedComponent;
  let fixture: ComponentFixture<UserSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
