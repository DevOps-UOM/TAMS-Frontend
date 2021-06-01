import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempPinLocationComponent } from './temp-pin-location.component';

describe('TempPinLocationComponent', () => {
  let component: TempPinLocationComponent;
  let fixture: ComponentFixture<TempPinLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempPinLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempPinLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
