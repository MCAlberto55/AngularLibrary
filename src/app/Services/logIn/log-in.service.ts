import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  private api = 'https://qr-lib-api.herokuapp.com/auth/login';

  constructor(private htts: HttpClient) {}

  public logIn(mail: string, pass: string): Observable<any> {
    let data = {
      email: mail,
      password: pass,
    };

    return this.htts.post(this.api, data);
  }
}
