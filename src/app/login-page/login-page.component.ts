import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formName = 'Login Here'
  placeholderName ='enter password'
  uname:any

  constructor() {

  }
  ngOnInit(): void {

  }
  method1(){
    alert('button pressed')
  }
  unameChange(event :any){
    this.uname=event.target.value
  }
}
