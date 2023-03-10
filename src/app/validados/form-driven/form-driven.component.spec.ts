import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDrivenComponent } from './form-driven.component';

describe('FormDrivenComponent', () => {
  let component: FormDrivenComponent;
  let fixture: ComponentFixture<FormDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
