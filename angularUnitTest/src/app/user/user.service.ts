import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {


  }

  users = [{ id: 1, name: "shri" },
  { id: 2, name: "shri2" }
  ];

  getUsers() {
    return of(this.users);
  }
}
