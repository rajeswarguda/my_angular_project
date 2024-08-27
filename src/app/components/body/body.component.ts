import { Component } from '@angular/core';
import { DatabindingComponent } from "../databinding/databinding.component";
import { DirectivesComponent } from '../directives/directives.component';
import { DirectivesAssignment1Component } from "../directives-assignment1/directives-assignment1.component";
import { PaginationAssignementComponent } from "../pagination-assignement/pagination-assignement.component";
import { EmployeeCRUDComponent } from "../employee-crud/employee-crud.component";
import { PipesdemoComponent } from "../pipesdemo/pipesdemo.component";
import { PipesComponent } from "../pipes/pipes.component";
import { ParentComponent } from "../parent/parent.component";
import { UserparentComponent } from "../userparent/userparent.component";
import { EmployeeComponent } from "../employee/employee.component";
import { UserdemoComponent } from "../userdemo/userdemo.component";
import { EmpSubjectDemo1Component } from "../emp-subject-demo1/emp-subject-demo1.component";
import { EmpSubjectDemo2Component } from "../emp-subject-demo2/emp-subject-demo2.component";
import { EmpSubjectDemo3Component } from "../emp-subject-demo3/emp-subject-demo3.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [DatabindingComponent, DirectivesComponent, DirectivesAssignment1Component, PaginationAssignementComponent, EmployeeCRUDComponent, PipesdemoComponent, PipesComponent, ParentComponent, UserparentComponent, EmployeeComponent, UserdemoComponent, EmpSubjectDemo1Component, EmpSubjectDemo2Component, EmpSubjectDemo3Component],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  menu: number = 60;

}
