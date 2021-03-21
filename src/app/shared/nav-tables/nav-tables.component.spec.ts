import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTablesComponent } from './nav-tables.component';

describe('NavTablesComponent', () => {
  let component: NavTablesComponent;
  let fixture: ComponentFixture<NavTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
