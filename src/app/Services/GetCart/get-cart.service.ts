import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetCartService {
  private api = 'https://qr-lib-api.herokuapp.com/users/cart';

  constructor(private http: HttpClient) {}

  public getCart(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('UserToken')}`,
      }),
    };
    return this.http.get(this.api, httpOptions);
  }
}
