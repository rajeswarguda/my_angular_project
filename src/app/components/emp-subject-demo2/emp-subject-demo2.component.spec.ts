import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSubjectDemo2Component } from './emp-subject-demo2.component';

describe('EmpSubjectDemo2Component', () => {
  let component: EmpSubjectDemo2Component;
  let fixture: ComponentFixture<EmpSubjectDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpSubjectDemo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSubjectDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
