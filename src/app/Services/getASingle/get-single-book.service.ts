import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetSingleBookService {
  private fakeApi = 'https://qr-lib-api.herokuapp.com/books?search=';

  constructor(private https: HttpClient) {}

  public getBook(input: String): Observable<any> {
    return this.https.get(this.fakeApi + input);
  }
}
