import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  private fakeApi = 'https://fakestoreapi.com/auth/login';

  constructor(private htts: HttpClient) {}

  public logIn(user: string, pass: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    if (user == null || user.length == 0) {
      console.log('error');
      throw new Error(
        'El nombre de usuario no es válido o contiene caracteres especiales'
      );
    }

    if (pass == null || pass.length == 0) {
      console.log('error');

      throw new Error(
        'La contraseña no es válida o contiene caracteres especiales'
      );
    }

    let dato = JSON.stringify({
      username: 'johnd',
      password: 'm38rmF$',
    });

    let data = JSON.stringify({
      user,
      pass,
    });

    return this.htts.post(this.fakeApi, dato, { headers: headers });
  }
}
