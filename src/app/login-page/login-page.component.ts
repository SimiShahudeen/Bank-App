import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formName:string = 'Login Here'
  placeholderName = 'enter password'
  constructor(private a1: Router) {

  }
  ngOnInit(): void {

  }
  method1() {
    this.a1.navigateByUrl('home')
  }


}
