import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAItineraryMapComponent } from './ta-itinerary-map.component';

describe('TAItineraryMapComponent', () => {
  let component: TAItineraryMapComponent;
  let fixture: ComponentFixture<TAItineraryMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAItineraryMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TAItineraryMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
