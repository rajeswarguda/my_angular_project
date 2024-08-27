import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  public employeeService: any;

  employees:any=null;

  constructor() {
    this.employeeService = inject(EmployeeService);
  }

  fetchAllEmployees(){
    this.employees = this.employeeService.fetchEmployees();
  }


  fetchFilteredEmployees(gender:any){
    this.employees = this.employeeService.fetchFilteredEmployees(gender);
  }
  

}
