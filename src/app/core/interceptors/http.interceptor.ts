import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Observable } from 'rxjs';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  constructor(public authenticationService: AuthenticationService) {}

   Token = this.authenticationService.getToken();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = this.authenticationService.getToken();
    console.log('bearerToken', authToken)
   request = request.clone({
    setHeaders:{
      Authorization: `Bearer ${authToken}`
    }
   })
   return next.handle(request);
  }
}