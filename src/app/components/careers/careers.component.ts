import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

  constructor(private location : Location){

  }

  goBack(){
    this.location.back();
  }

}
