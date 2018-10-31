// THIS THING IS A SERVICE I THINK....
import { Injectable } from '@angular/core';
// import here:
import { HttpClient } from '@angular/common/http';
// import here:
import { Observable } from 'rxjs';
// import user
import { Vendor } from './vendor.class';
// import json
import { JsonResponse } from '../util/json-response.class';

// define this constant because we're going to use it a few times
const url = 'http://localhost:8080/Vendors/';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  // create function (list)
  list(): Observable<JsonResponse> {
    // return this.http.get('http://localhost:8080/Users/List') as Observable<any>;
    return this.http.get(url + 'List') as Observable<JsonResponse>;
  }

// add getter, don't need : string
get(id): Observable<JsonResponse> {
  return this.http.get(url + 'Get/' + id) as Observable<JsonResponse>;
}

// create function (add)
add(vendor: Vendor): Observable<JsonResponse> {
  return this.http.post(url + "Add", vendor) as Observable<JsonResponse>;
}

// create update
change(vendor: Vendor): Observable<JsonResponse> {
  return this.http.post(url + "Change", vendor) as Observable<JsonResponse>;
}

// create delete function
remove(vendor: Vendor): Observable<JsonResponse> {
  return this.http.post(url + "Remove", vendor) as Observable<JsonResponse>;
}
  
  // pass parameter through constructor
  constructor(private http: HttpClient) { }
}
