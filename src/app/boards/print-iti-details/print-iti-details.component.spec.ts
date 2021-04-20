import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintItiDetailsComponent } from './print-iti-details.component';

describe('PrintItiDetailsComponent', () => {
  let component: PrintItiDetailsComponent;
  let fixture: ComponentFixture<PrintItiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintItiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintItiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
