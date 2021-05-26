import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaAgentsTableComponent } from './ca-agents-table.component';

describe('CaAgentsTableComponent', () => {
  let component: CaAgentsTableComponent;
  let fixture: ComponentFixture<CaAgentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaAgentsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaAgentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
