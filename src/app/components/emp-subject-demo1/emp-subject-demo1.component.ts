import { Component } from '@angular/core';
import { EmployeesubjectService } from '../../services/employeesubject.service';

@Component({
  selector: 'app-emp-subject-demo1',
  standalone: true,
  imports: [],
  templateUrl: './emp-subject-demo1.component.html',
  styleUrl: './emp-subject-demo1.component.css'
})
export class EmpSubjectDemo1Component {

emp:any;
  constructor(private employeesubjectService: EmployeesubjectService) { }

  AddEmployee(id: any, name: any, sal: any) {

    this.emp = { "id": id, "name": name, "sal": sal}
    this.employeesubjectService.sendEmployee(this.emp);

  }

}
