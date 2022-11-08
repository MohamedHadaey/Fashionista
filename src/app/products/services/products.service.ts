import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // baseUrl:any="https://fakestoreapi.com/"
  constructor(private http: HttpClient) {}

  // 1- get all products
  getAllProducts(): Observable<any> {
    return this.http.get(`${environment.baseUrl}products`);
  }

  // 2- get all categories
  getAllCategories(): Observable<any> {
    return this.http.get(`${environment.baseUrl}products/categories`);
  }

  // 3- get specific category
  getSpecificCategory(value: any): Observable<any> {
    return this.http.get(`${environment.baseUrl}products/category/${value}`);
  }

  // get single product details
  getProductDetails(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}products/${id}`);
  }
}
