import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {

  }

  dataLoad(): Observable<any> {
    return this.http.get('../api/articles.json');
  }
}
