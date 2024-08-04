import { Component } from '@angular/core';
import { DatabindingComponent } from "../databinding/databinding.component";
import { DirectivesComponent } from '../directives/directives.component';
import { DirectivesAssignment1Component } from "../directives-assignment1/directives-assignment1.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [DatabindingComponent, DirectivesComponent, DirectivesAssignment1Component],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  menu: number = 2;

}
