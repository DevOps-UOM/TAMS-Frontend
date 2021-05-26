import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaAgentsTableComponent } from './ta-agents-table.component';

describe('TaAgentsTableComponent', () => {
  let component: TaAgentsTableComponent;
  let fixture: ComponentFixture<TaAgentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaAgentsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaAgentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
