import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaTaskComponent } from './ta-task.component';

describe('TaTaskComponent', () => {
  let component: TaTaskComponent;
  let fixture: ComponentFixture<TaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
