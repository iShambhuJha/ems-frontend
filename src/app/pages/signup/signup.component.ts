import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        empCode:["",Validators.required],
        emailId:["", Validators.required],
        password:["", Validators.required],
        cnfPwd:["", Validators.required]
      }
    )
  }

  get f() {
    return this.signUpForm.controls;
  }

  onSignUpSubmit(): void {
    this.submitted = true;

    if (this.signUpForm.invalid) {
      return;
    }
  }

}
