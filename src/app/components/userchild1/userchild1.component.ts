import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userchild1',
  standalone: true,
  imports: [],
  templateUrl: './userchild1.component.html',
  styleUrl: './userchild1.component.css',
  inputs:['childUsers'],
  outputs: ['deleteEvent']
})
export class Userchild1Component {

  childUsers:any;

  deleteEvent = new EventEmitter();

  deleteUser(id:any) {
    console.log("child delete: ",id);
    this.deleteEvent.emit(id);
  }

}
