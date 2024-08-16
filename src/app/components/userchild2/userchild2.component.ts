import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userchild2',
  standalone: true,
  imports: [],
  templateUrl: './userchild2.component.html',
  styleUrl: './userchild2.component.css',
  outputs: ['addEvent']
})
export class Userchild2Component {

  user: any;

  addEvent = new EventEmitter();


  AddUser(id: any, name: any, age: any, email: any) {

    this.user = { id: id, name: name, age: age, email: email }
    console.log("child delete: ",id);
    this.addEvent.emit(this.user);

  }

}
