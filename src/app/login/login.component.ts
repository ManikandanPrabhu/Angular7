import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  // Validate user Information
  loginUser() {
    console.log("in login user mthod");
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(['home']);
    
  }

}
