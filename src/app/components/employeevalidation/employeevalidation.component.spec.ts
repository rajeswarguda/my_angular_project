import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeevalidationComponent } from './employeevalidation.component';

describe('EmployeevalidationComponent', () => {
  let component: EmployeevalidationComponent;
  let fixture: ComponentFixture<EmployeevalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeevalidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
