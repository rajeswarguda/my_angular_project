import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormDynamicComponent } from './reactive-form-dynamic.component';

describe('ReactiveFormDynamicComponent', () => {
  let component: ReactiveFormDynamicComponent;
  let fixture: ComponentFixture<ReactiveFormDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
