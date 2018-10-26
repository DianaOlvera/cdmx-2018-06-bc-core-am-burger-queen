import { Component, OnInit } from '@angular/core';
import {AuthService, AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  public name: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.password, this.name)
    .then((res)=>{
      console.log("vamos bien");
      console.log(res);
    }).catch((err)=>{
      console.log(err.message)
    });
  }
}
