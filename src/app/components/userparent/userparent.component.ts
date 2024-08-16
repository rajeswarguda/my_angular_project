import { Component } from '@angular/core';
import { Userchild1Component } from "../userchild1/userchild1.component";
import { Userchild2Component } from "../userchild2/userchild2.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userparent',
  standalone: true,
  imports: [Userchild1Component, Userchild2Component, CommonModule, FormsModule],
  templateUrl: './userparent.component.html',
  styleUrl: './userparent.component.css'
})
export class UserparentComponent {
  userList: any = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" }
  ];

  addUser(user: any) {
    console.log("Parent : " + user);

    this.userList.push(user);
  }

  deleteUser(id: any) {
    console.log("Parent : " + id)

    this.userList = this.userList.filter((user: any) => user.id != id);
  }

}
