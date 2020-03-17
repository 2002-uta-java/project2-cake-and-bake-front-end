import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  // create a user on register
  createUser(user) {
    return this._http.post('/user', user)
  }

  // get user by username to login
  getUser(id, username) {
    return this._http.get('/user' + id, username)
  }

}
