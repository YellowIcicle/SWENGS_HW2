import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadquartersService {

  constructor(private http: HttpClient) { }

  retrieveHeadquartersOptions() {
    return this.http.get <any[]>('/api/country/options');
  }
}
