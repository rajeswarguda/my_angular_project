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

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [DatabindingComponent, DirectivesComponent, DirectivesAssignment1Component, PaginationAssignementComponent, EmployeeCRUDComponent, PipesdemoComponent, PipesComponent, ParentComponent, UserparentComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  menu: number = 60;

}
