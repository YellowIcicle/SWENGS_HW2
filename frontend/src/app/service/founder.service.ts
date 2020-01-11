import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FounderService {

  constructor(private http: HttpClient) { }

  retrieveFounderOptions() {
    return this.http.get <any[]>('/api/founder/options');
  }
}
