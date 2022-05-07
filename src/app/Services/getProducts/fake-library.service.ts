import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeLibraryService {
  private fakeApi = 'https://fakestoreapi.com/products';

  constructor(private htts: HttpClient) {}

  public getAll(): Observable<any> {
    return this.htts.get(this.fakeApi);
  }
}
