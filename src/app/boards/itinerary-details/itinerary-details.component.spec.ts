import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryDetailsComponent } from './itinerary-details.component';

describe('ItineraryDetailsComponent', () => {
  let component: ItineraryDetailsComponent;
  let fixture: ComponentFixture<ItineraryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItineraryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
