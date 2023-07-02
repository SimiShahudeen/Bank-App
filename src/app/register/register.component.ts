import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // acno: any
  // uname: any
  // pwd: any
  constructor(private fb: FormBuilder) { }
  registerForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })
  ngOnInit(): void {

  }
  SignUp() {
    // console.log(this.acno, this.uname, this.pwd);

    if (this.registerForm.valid) {
      if(this.registerForm.value.psw==this.registerForm.value.cpsw){
        alert('register works')
      }
      else{
        alert('password does not match')
      }
    }
    else {
      alert('invalid form')
    }
    // console.log(this.registerForm.value.acno);

  }

}
