import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: any;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.newUser = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: ""
    }
  }

  // might not need submit function, just call the createUserFromService function directly when user click submit
  onSubmit() {
    
    // reset newUser fields to empty after creation
    this.newUser = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: ""
    }
  }

  createUserFromService(newUser){
    let observable = this._userService.createUser(newUser)
    observable.subscribe((user) => {
      this.newUser = user
    })
    // reset newUser fields to empty after creation
    this.newUser = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: ""
    }
  }



}
