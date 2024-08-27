import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSubjectDemo1Component } from './emp-subject-demo1.component';

describe('EmpSubjectDemo1Component', () => {
  let component: EmpSubjectDemo1Component;
  let fixture: ComponentFixture<EmpSubjectDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpSubjectDemo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSubjectDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
