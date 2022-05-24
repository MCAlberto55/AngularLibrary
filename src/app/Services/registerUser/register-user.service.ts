import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserService {
  private fakeApi = 'https://qr-lib-api.herokuapp.com/auth/register';

  constructor(private https: HttpClient) {}

  public registerUser(data: any): Observable<any> {
    return this.https
      .post(this.fakeApi, data)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      alert('El correo ys está registrado');
      console.error('An error occurred:', error.error);
    }

    if (error.status === 201) {
      alert('El usuario ya existe');
      console.error('El usuario ya existe', error.error);
    }

    return throwError(() => new Error('Something bad happened'));
  }
}
