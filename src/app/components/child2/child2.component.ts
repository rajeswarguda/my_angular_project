import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['aChild', 'child1'], // angular 5
  outputs: ['nameEvent']
})
export class Child2Component {
  aChild: any;
  child1: any;

  name: string = 'Rajeswar Guda';

  nameEvent = new EventEmitter();

  sendDataToParent() {
    this.nameEvent.emit(this.name);
  }

}
