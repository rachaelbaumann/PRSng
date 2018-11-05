import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import here:
import { Observable } from 'rxjs';
// import user
import { PurchaseRequest } from './purchase-request.class';
// import json
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/PurchaseRequests/';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestService {

list(): Observable<JsonResponse> {
  return this.http.get(url + 'List') as Observable<JsonResponse>;
}

// add getter, don't need : string
get(id): Observable<JsonResponse> {
  return this.http.get(url + 'Get/' + id) as Observable<JsonResponse>;
}

// create function (add)
add(pr: PurchaseRequest): Observable<JsonResponse> {
  return this.http.post(url + "Add", pr) as Observable<JsonResponse>;
}

// create update
change(pr: PurchaseRequest): Observable<JsonResponse> {
  return this.http.post(url + "Change", pr) as Observable<JsonResponse>;
}

// create delete function
remove(pr: PurchaseRequest): Observable<JsonResponse> {
  return this.http.post(url + "Remove", pr) as Observable<JsonResponse>;
}
  
  // pass parameter through constructor
  constructor(private http: HttpClient) { }
}
