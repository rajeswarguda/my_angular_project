import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeevalidation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employeevalidation.component.html',
  styleUrl: './employeevalidation.component.css'
})
export class EmployeevalidationComponent {
  name = 'sachin';
  age = 40;

  submitMyForm(formData: any) {
    console.log(formData)
  }
}
