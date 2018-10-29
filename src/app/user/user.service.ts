import { Injectable } from '@angular/core';
// import here:
import { HttpClient } from '@angular/common/http';
// import here:
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // create function (list)
  list(): Observable<any> {
    return this.http.get('http://localhost:8080/Users/list') as Observable<any>;
  }
  
  // pass parameter through constructor
  constructor(private http: HttpClient) { }
}
