import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

 userForm!: FormGroup;
 email:string='';
 password:any='';
 public showPassword: boolean = false;
 

  constructor(public fb:FormBuilder) { }

  ngOnInit() {
  
     this.userForm = this.fb.group ({
      emailId: ['', Validators.required],
      Password: ['', [Validators.required , Validators.minLength(4)]],
    })
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

    onSubmit(){
      if(this.userForm.invalid) {
        this.userForm.markAsTouched();
      }
    
      console.log(this.userForm.value);
      
    }
  
  
}
