import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formName: string = 'Login Here'
  placeholderName = 'enter password'
  constructor(private a1: Router, private fb: FormBuilder) { }
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })
  ngOnInit(): void {

  }
  login() {
    if(this.loginForm.valid){
      this.a1.navigateByUrl('home')
    }
    else{
      alert('ínvalid form')
    }
  }


}
