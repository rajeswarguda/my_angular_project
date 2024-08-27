import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-userdemo',
  standalone: true,
  imports: [],
  templateUrl: './userdemo.component.html',
  styleUrl: './userdemo.component.css'
})
export class UserdemoComponent {

  userService: any;
  users:any = null;

  constructor(){
    this.userService = inject(UserService);
  }

  fetchUsers(){
    this.users = this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(response)
      }
    )
  }



}
