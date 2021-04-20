import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaOnlyDetailFormComponent } from './ta-only-detail-form.component';

describe('TaOnlyDetailFormComponent', () => {
  let component: TaOnlyDetailFormComponent;
  let fixture: ComponentFixture<TaOnlyDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaOnlyDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaOnlyDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
