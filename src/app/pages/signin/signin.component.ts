import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'; 

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
 

  constructor(public fb:FormBuilder,  private authenticationService: AuthenticationService,private httpClient: HttpClient, public router:Router) { }

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
      var loginData = {
        "empCode": this.userForm.get('emailId')?.value,
        "password": CryptoJS.MD5(this.userForm.get('Password')?.value).toString()
        
      }

      if(this.userForm.invalid) {
        this.userForm.markAsTouched();
      }

      this.authenticationService.logIn(loginData).subscribe((data)=>{
        // console.log(data.accessToken);
        localStorage.setItem('access_token',data.accessToken);
        if(data.accessToken){
          this.authenticationService.loggedIn();
          this.router.navigate(['/signup'])
        }
      })  

      // let  token = this.authenticationService.getToken()
      // console.log('token', token);
    

    
    }


//Function to get JWT access token that we will use to allow the user to access the protected resources on the server.

    // login(user:any){
    //   return this.httpClient.post("http://localhost:3000/login",user).subscribe((res) => {
    //     console.log('res', res);
    //     localStorage.setItem('access_token', JSON.stringify(res));
    //     console.log('res', res);
    //    })
    //  }
          
}
