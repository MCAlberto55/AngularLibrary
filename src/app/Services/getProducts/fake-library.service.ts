import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeLibraryService {
  private fakeApi = 'https://qr-lib-api.herokuapp.com/books?page=';

  constructor(private http: HttpClient) {}

  public getAll(page: String): Observable<any> {
    return this.http.get(this.fakeApi + page);
  }
}
