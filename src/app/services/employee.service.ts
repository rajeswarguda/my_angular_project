import { Injectable } from '@angular/core';
import * as employeeJson from './employees.json'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeList: any;
  constructor() {
    this.employeeList = employeeJson.employees;
  }

  fetchEmployees() {
    return this.employeeList;
  }
  fetchFilteredEmployees(gender: any) {
    return this.employeeList.filter((emp: any) => emp.gender == gender);
  }
}
