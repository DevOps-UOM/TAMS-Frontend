import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaTaskCardComponent } from './ta-task-card.component';

describe('TaTaskCardComponent', () => {
  let component: TaTaskCardComponent;
  let fixture: ComponentFixture<TaTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaTaskCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
