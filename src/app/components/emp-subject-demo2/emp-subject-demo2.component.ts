import { Component } from '@angular/core';
import { EmployeesubjectService } from '../../services/employeesubject.service';

@Component({
  selector: 'app-emp-subject-demo2',
  standalone: true,
  imports: [],
  templateUrl: './emp-subject-demo2.component.html',
  styleUrl: './emp-subject-demo2.component.css'
})
export class EmpSubjectDemo2Component {

  employees: any = [];

  constructor(private employeesubjectService: EmployeesubjectService) { }

  ngOnInit() {
    this.employeesubjectService.getEmployee().subscribe(empObj => {
      console.log(empObj)
      if(empObj.operation == 'add'){
        this.employees.push(empObj.emp);
      }
      if(empObj.operation == 'delete'){
        this.employees = this.employees.filter((emp: any) => emp.id != empObj.id);
      } 
    });
  }

  deleteEmp(id : number){
    this.employeesubjectService.deleteEmployee(id)
  }



}
