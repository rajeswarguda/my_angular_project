import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesubjectService {

  emp : any =  {operation:"add", emp:{id:1, name:"Raj", sal:2000}}

  private employeeSubject = new BehaviorSubject<any>(this.emp);
  private employeeObservable = this.employeeSubject.asObservable();

  sendEmployee(emp: any) {
    console.log(emp)
    this.employeeSubject.next( {operation:"add", emp:emp} );
  }
  deleteEmployee(id:any) {
    this.employeeSubject.next({operation:"delete", id:id} );
  }
  getEmployee(): Observable<any> {
    return this.employeeObservable; // converts subject to Observable
  }
}
