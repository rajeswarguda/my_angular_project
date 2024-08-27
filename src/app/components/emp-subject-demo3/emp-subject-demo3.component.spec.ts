import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSubjectDemo3Component } from './emp-subject-demo3.component';

describe('EmpSubjectDemo3Component', () => {
  let component: EmpSubjectDemo3Component;
  let fixture: ComponentFixture<EmpSubjectDemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpSubjectDemo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSubjectDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
