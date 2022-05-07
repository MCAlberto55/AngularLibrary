import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetCartService {
  private fakeApi = 'https://fakestoreapi.com/carts/user/';

  constructor(private http: HttpClient) {}

  public getCart(id: string): Observable<any> {
    return this.http.get(this.fakeApi + id);
  }
}
