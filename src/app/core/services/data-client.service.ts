import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataClientService {

  constructor(private http: HttpClient) {
  }

  // For Read Operation
  public get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(url, { params: params });
  }

  // For Create Operation
  public post<T>(url: string, model: T): Observable<T> {
    return this.http.post<T>(url, model);
  }

  // For Update Operation
  public update<T>(url: string, model: T): Observable<T> {
    return this.http.put<T>(url, JSON.stringify(model));
  }

  // For Delete Operation by ID
  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }

  // For Delete Operation by Object
  public deleteByObj<T>(url: string, model: T): Observable<T> {
    return this.http.post<T>(url, JSON.stringify(model));
  }
  // For Read Operation
  public getFile(url: string, params?: any) {
    return this.http.get(url,{responseType:'Blob' as 'json'});
  }

}
