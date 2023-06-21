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
  pd:any

  constructor() {

  }
  ngOnInit(): void {

  }
  method1(arg1:any , arg2:any){
    // console.log(arg1.value, arg2.value);
    this.uname = arg1.value;
    this.pd = arg2.value;
    console.log(this.uname,this.pd);
    alert('login')
  }
  
}
