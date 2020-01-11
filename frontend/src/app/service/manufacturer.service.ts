import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private http: HttpClient) { }

  getManufacturers() {
    return this.http.get( '/api/manufacturer/list');
  }
  getManufacturer() {
    return this.http.get( '/api/manufacturer/list');
  }
  deleteManufacturer(manufacturer: any) {
    return this.http.delete( '/api/manufacturer/' + manufacturer.id + '/delete');
  }
  retrieveManufacturerOptions() {
    return this.http.get <any[]>('/api/manufacturer/options');
  }
}
