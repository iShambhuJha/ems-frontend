import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { finalize, Observable, tap } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';


@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  constructor(public authenticationService: AuthenticationService, public toast: NgToastService) {}

   Token = this.authenticationService.getToken();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.authenticationService.show();
     

    const authToken = this.authenticationService.getToken();
    console.log('bearerToken', authToken)
   request = request.clone({
    setHeaders:{
      Authorization: `Bearer ${authToken}`
    }
   })
   return next.handle(request) .pipe(
    tap((event:HttpEvent<any>)=>{
      if(event instanceof HttpResponse) {
       this.toast.success({detail:"success", summary: "success message", duration: 5000}); 
      }
    }, (err: HttpErrorResponse)=>{
      this.toast.error({detail:"fail", summary: "Error message", duration: 5000}); 
    }),
    
    finalize(()=> this.authenticationService.hide()));;
  }
}