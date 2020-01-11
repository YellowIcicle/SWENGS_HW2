import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  retrieveCountryOptions() {
    return this.http.get <any[]>('/api/country/options');
  }
}
