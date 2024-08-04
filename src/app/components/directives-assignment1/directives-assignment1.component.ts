import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-assignment1',
  standalone: true,
  imports: [],
  templateUrl: './directives-assignment1.component.html',
  styleUrl: './directives-assignment1.component.css'
})
export class DirectivesAssignment1Component {

  users: any[];
  flag: boolean = true;

  constructor() {
    this.users = [
      {id: 1, name: 'Raj', phone: "12345"},
      {id: 2, name: 'Sai', phone: "6789"},
      {id: 3, name: 'Nag', phone: "3456780"},
      {id: 4, name: 'Kiran', phone: "345678"},
  ];
  }

toggle(){
    this.flag = !this.flag
  }

}
