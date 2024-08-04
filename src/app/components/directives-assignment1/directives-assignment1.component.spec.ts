import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAssignment1Component } from './directives-assignment1.component';

describe('DirectivesAssignment1Component', () => {
  let component: DirectivesAssignment1Component;
  let fixture: ComponentFixture<DirectivesAssignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesAssignment1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesAssignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
