import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryMapComponent } from './itinerary-map.component';

describe('ItineraryMapComponent', () => {
  let component: ItineraryMapComponent;
  let fixture: ComponentFixture<ItineraryMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItineraryMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
