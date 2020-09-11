import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Data } from './models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.baseUrl;

  getApiData(): Observable<Data> {
    return this.http.get<Data>(this.apiUrl);
  }
}

