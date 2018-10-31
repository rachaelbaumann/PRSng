import { Injectable } from '@angular/core';
// import here:
import { HttpClient } from '@angular/common/http';
// import here:
import { Observable } from 'rxjs';
// import user
import { Product } from './product.class';
// import json
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/Products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
add(product: Product): Observable<JsonResponse> {
  return this.http.post(url + "Add", product) as Observable<JsonResponse>;
}

// create update
change(product: Product): Observable<JsonResponse> {
  return this.http.post(url + "Change", product) as Observable<JsonResponse>;
}

// create delete function
remove(product: Product): Observable<JsonResponse> {
  return this.http.post(url + "Remove", product) as Observable<JsonResponse>;
}
  
  // pass parameter through constructor
  constructor(private http: HttpClient) { }
}
