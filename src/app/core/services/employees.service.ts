import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employees } from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiServer = "http://localhost:4000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(employee:any): Observable<Employees> {
    return this.httpClient.post<Employees>(this.apiServer + '/create/', JSON.stringify(employee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id:number): Observable<Employees> {
    return this.httpClient.get<Employees>(this.apiServer + '/getEmployees/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Employees[]> {
    return this.httpClient.get<Employees[]>(this.apiServer + '/employees/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, employee:any): Observable<Employees> {
    return this.httpClient.put<Employees>(this.apiServer + '/updateEmployees/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<Employees>(this.apiServer + '/deleteEmployee/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
