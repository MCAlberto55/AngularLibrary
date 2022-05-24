import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservacionService {
  private api = 'https://qr-lib-api.herokuapp.com/reserves';

  constructor(private https: HttpClient) {}

  public reservar(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('UserToken')}`,
      }),
    };
    return this.https
      .post(this.api, {}, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    alert('Se enviado el QR');
    return throwError(() => new Error('Something bad happened with the email'));
  }
}
