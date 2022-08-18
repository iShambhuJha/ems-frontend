import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpUrls } from 'src/app/shared/http-urls';
import { IUser } from '../models/user';
import { DataClientService } from './data-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;
  Token: any;
  

  constructor(private dataClientService: DataClientService) { }
  // Service method to create a new user
  public signUp(userData:any): Observable<IUser> {
    return this.dataClientService.post<IUser>(HttpUrls.USER_CREATE_ACCOUNT, userData);
  }

  public logIn(loginCred:any){
    return this.dataClientService.post(HttpUrls.USER_LOGIN, loginCred)
      // localStorage.setItem('access_token', res.accessToken);
  }

  public loggedIn(): boolean {
    return this.isLoggedIn = true;
  }

  public  getToken() {
    // this.dataClientService.get(HttpUrls.USER_LOGIN).subscribe((token) =>{
    //  return this.Token = token;
    // })
    return localStorage.getItem('accessToken');
  }
}
