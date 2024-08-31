import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ageRangeValidator } from '../../../utils/ageValidator';
import { userExistsValidator } from '../../../utils/userExistsValidator';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      firstname: new FormControl('Rajeswar', [Validators.required, Validators.minLength(5)]),
      lastname: new FormControl('G', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('rajeswar@gmail.com', [Validators.required, Validators.email], [userExistsValidator()]),
      dob: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), ageRangeValidator(17,40)]),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pin: new FormControl()
      })

    });

  }

  submitMyForm(formData: any) {
    console.log(formData.value)
  }

}
