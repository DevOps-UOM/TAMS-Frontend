import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaMapComponent } from './ta-map.component';

describe('TaMapComponent', () => {
  let component: TaMapComponent;
  let fixture: ComponentFixture<TaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
