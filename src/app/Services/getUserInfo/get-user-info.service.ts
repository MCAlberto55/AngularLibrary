import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUserInfoService {
  constructor(private http: HttpClient) {}

  public getInfo(token: string): any {
    return {
      userId: 1,
      cartId: 2,
    };
  }
}
