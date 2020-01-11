import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get( '/api/car/list');
  }

  deleteCar(car: any) {
    return this.http.delete( '/api/car/' + car.id + '/delete');
  }
}
