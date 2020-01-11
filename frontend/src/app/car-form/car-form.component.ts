import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../service/car.service';
import {ConditionService} from '../service/condition.service';
import {ManufacturerService} from '../service/manufacturer.service';
import {CountryService} from '../service/country.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  carFormGroup;
  manufacturerOptions;
  countryOptions;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router,
              private carService: CarService, private conditionService: ConditionService, private manufacturerService: ManufacturerService,
              private countryService: CountryService) { }

  ngOnInit() {

    this.countryService.retrieveCountryOptions().subscribe( (result) => {
      this.countryOptions = result;
    });
    this.manufacturerService.retrieveManufacturerOptions().subscribe((result) => {
      this.manufacturerOptions = result;
    });
    this.carFormGroup = this.fb.group({
      'id': [null],
      'model': ['', Validators.required],
      'manufacturer': [null],
      'color': [null, Validators.required],
      'price': ['', Validators.required],
      'condition': [],
      'used': [false],
      'Country_mostSales': [[]]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get('/api/car/' + id + '/get')
        .subscribe((response) => {
          this.carFormGroup.patchValue(response)
        });
    }
  }

  createCar() {
    const car = this.carFormGroup.value;
    if (car.id) {
      this.http.put('/api/car/' + car.id + '/update', car)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.http.post('/api/car/create', car)
        .subscribe((response: any) => {
          this.router.navigate(['/car-form/' + response.id]);
        });
    }

  }

  deleteCar() {
    const car = this.carFormGroup.value;
    this.http.delete('/api/car/' + car.id + '/delete')
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}
