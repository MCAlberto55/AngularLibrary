import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetSingleBookService {
  private fakeApi = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) {}

  public getBook(id: string) {
    return this.http.get(this.fakeApi + id);
  }
}
