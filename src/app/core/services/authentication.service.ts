import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpUrls } from 'src/app/shared/http-urls';
import { IUser } from '../models/user';
import { DataClientService } from './data-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private dataClientService: DataClientService) { }
  // Service method to create a new user
  public signUp(userData:any): Observable<IUser> {
    return this.dataClientService.post<IUser>(HttpUrls.USER_CREATE_ACCOUNT, userData);
  }
}
