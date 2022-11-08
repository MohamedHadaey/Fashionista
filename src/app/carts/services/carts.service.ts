import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private http: HttpClient) {}

  // order your cart
  orderYourCart(model: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}carts`, model);
  }
}
