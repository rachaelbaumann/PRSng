import { Injectable } from '@angular/core';
// import here:
import { HttpClient } from '@angular/common/http';
// import here:
import { Observable } from 'rxjs';
// import user
import { LineItems } from './line-items.class';
// import json
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/PurchaseRequestLineItems/';

@Injectable({
  providedIn: 'root'
})
export class LineItemsService {

     // create function (list)
     list(): Observable<JsonResponse> {
      return this.http.get(url + 'List') as Observable<JsonResponse>;
    }
  
  // add getter, don't need : string
  get(id): Observable<JsonResponse> {
    return this.http.get(url + 'Get/' + id) as Observable<JsonResponse>;
  }
  
  // create function (add)
  add(prli: LineItems): Observable<JsonResponse> {
    return this.http.post(url + "Add", prli) as Observable<JsonResponse>;
  }
  
  // create update
  change(prli: LineItems): Observable<JsonResponse> {
    return this.http.post(url + "Change", prli) as Observable<JsonResponse>;
  }
  
  // create delete function
  remove(prli: LineItems): Observable<JsonResponse> {
    return this.http.post(url + "Remove", prli) as Observable<JsonResponse>;
  }
    
    // pass parameter through constructor
    constructor(private http: HttpClient) { }
}
