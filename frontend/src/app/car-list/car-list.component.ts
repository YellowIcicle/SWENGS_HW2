import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarService} from '../service/car.service';
import {ManufacturerService} from '../service/manufacturer.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  displayedColumns = ['model', 'manufacturer', 'color', 'price', 'condition'];
  cars: any[];


  constructor(private http: HttpClient, public carService: CarService, public manufacturerService: ManufacturerService) { }

  ngOnInit() {
    this.http.get('/api/car/list')
      .subscribe((response: any[]) => {
        this.cars = response;
      });
  }

  deleteCar(car: any) {
    this.carService.deleteCar(car)
      .subscribe( () => {
        this.ngOnInit();
      });
  }

  evaluateCondition(letter: string) {
    switch (letter) {
      case 'v': {
        return 'very good';
      }
      case 'g': {
        return 'good';
      }
      case 'k': {
        return 'ok';
      }
      case 'b': {
        return 'bad';
      }
      default: {
        return null;
      }
    }
  }

}
