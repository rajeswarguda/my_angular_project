import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {

  employees: any = [
    { id: 1, name: "Rajesh", dept: "IT", sal: 2000 },
    { id: 2, name: "Sai", dept: "IT", sal: 2000 },
    { id: 3, name: "Rama", dept: "IT", sal: 2000 },
    { id: 4, name: "Krishna", dept: "IT", sal: 2000 },
    { id: 5, name: "Shiva", dept: "IT", sal: 2000 }
  ];

  deleteEmp(id : number){

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

    this.employees = this.employees.filter((e:any) => e.id != id );
  }

}
