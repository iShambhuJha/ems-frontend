import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Validation from 'src/app/shared/utils/confirm-password';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        empCode:["",Validators.required],
        emailId:["", Validators.compose([Validators.required, Validators.email])],
        password:["", Validators.required],
        cnfPwd:["", Validators.required]
      }
      ,
      {
        validators: [Validation.match('password', 'cnfPwd')],
      }
    )
  }

  get f() {
    return this.signUpForm.controls;
  }

  // Function implementing user account creation
  onSignUpSubmit(): void {
    var userData = { 
      "empCode":this.signUpForm.get('empCode')!.value,
      "emailId":this.signUpForm.get('emailId')!.value,
      "password":this.signUpForm.get('password')!.value
    };
    this.submitted = true;

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      return;
    }
    this.authenticationService.signUp(userData).subscribe(
      (data) => {
        alert(data);
      },
      (err) => {
        
      }
    );
  }
}
