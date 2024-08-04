import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  num: number = 2;

  dayNumber: number = new Date().getDay();

  cars: string[] = ["Aadi", "Maruti", "Tesla", "Honda", "Tata"]

  employees = [
    { eid: 1, name: "Raj", phone: "123" },
    { eid: 2, name: "Sree", phone: "345" },
    { eid: 3, name: "Aadya", phone: "879" }
  ];

  addCars() {
    this.cars = ["Aadi", "Maruti", "Tesla", "Honda", "Tata", "Hundai"]
  }

  addEmployees() {
    this.employees = [
      { eid: 1, name: "Raj", phone: "123" },
      { eid: 2, name: "Sree", phone: "345" },
      { eid: 3, name: "Aadya", phone: "879" },
      { eid: 4, name: "shiva", phone: "007" }
    ];
  }

  updateEmployees(){
    this.employees[0].name = "Rajeswar Guda"
  }



}
