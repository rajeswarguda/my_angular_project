import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User, IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  role = 'teacher1';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {

    return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(
      map((response: User[]) => {
        const userArr = response.map((obj) => new User(obj.id, obj.name, obj.username, obj.email, obj.phone, obj.website));
        return userArr;
      })
    );
  }

  findUserByEmail(email: string) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
  }

  getMyRole() {
    return this.role;
  }
}
