import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  private fakeApi = 'https://fakestoreapi.com/carts';

  constructor(private htts: HttpClient) {}

  public add(product: string): Observable<any> {
    return this.htts.post(this.fakeApi, product);
  }
}
