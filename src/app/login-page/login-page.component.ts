import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formName = 'Login Here'
  placeholderName ='enter password'
  uname:any

  constructor(private a1:Router) {

  }
  ngOnInit(): void {

  }
  method1(){
    // alert(`${this.a1.sdata} ${this.a1.method2()}`)
    this.a1.navigateByUrl('home')
  }
  
  
}
