import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaLiveLocationComponent } from './ta-live-location.component';

describe('TaLiveLocationComponent', () => {
  let component: TaLiveLocationComponent;
  let fixture: ComponentFixture<TaLiveLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaLiveLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaLiveLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
