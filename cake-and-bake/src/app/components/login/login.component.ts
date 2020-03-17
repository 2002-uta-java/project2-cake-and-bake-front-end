import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.user = {
      username: "",
      password: ""
    }
  }

  getUserByUsernameFromService() {
    
  }

}
