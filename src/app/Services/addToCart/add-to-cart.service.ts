import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  private api = 'https://qr-lib-api.herokuapp.com/users/cart';

  constructor(private htts: HttpClient) {}

  public add(id: string): Observable<any> {
    let data = {
      bookId: id,
      quantity: 1,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('UserToken')}`,
      }),
    };

    return this.htts.post(this.api, data, httpOptions);
  }
}
