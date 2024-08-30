import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmodeldrivenComponent } from './formmodeldriven.component';

describe('FormmodeldrivenComponent', () => {
  let component: FormmodeldrivenComponent;
  let fixture: ComponentFixture<FormmodeldrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormmodeldrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormmodeldrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
