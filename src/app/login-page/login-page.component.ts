import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formName = 'Login Here'
  placeholderName ='enter password'

  constructor() {

  }
  ngOnInit(): void {

  }
  method1(){
    alert('button pressed')
  }
  unameChange(event :any){
    console.log(event.target.value);
    
  }
}
