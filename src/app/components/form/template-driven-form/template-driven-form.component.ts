import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  selectForm!: FormGroup;
  firstName = "Rajeswar";

  submitMyForm(formData: any) {
    console.log(formData)
  }

  selection(event: any) {
    console.log(event)

  }

}
