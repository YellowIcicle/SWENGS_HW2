import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ManufacturerService} from '../service/manufacturer.service';
import {CountryService} from '../service/country.service';
import {HeadquartersService} from '../service/headquarters.service';
import {FounderService} from '../service/founder.service';

@Component({
  selector: 'app-manufacturer-form',
  templateUrl: './manufacturer-form.component.html',
  styleUrls: ['./manufacturer-form.component.scss']
})
export class ManufacturerFormComponent implements OnInit {

  manufacturerFormGroup;
  founderOptions;
  manufacturerOptions;
  headquartersOptions;
  countryOptions;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router,
              private manufacturerService: ManufacturerService, private countryService: CountryService,
              private headquartersService: HeadquartersService, private founderService: FounderService) {
  }

  ngOnInit() {
    this.countryService.retrieveCountryOptions().subscribe((result) => {
      this.countryOptions = result;
    });
    this.manufacturerService.retrieveManufacturerOptions().subscribe((result) => {
      this.manufacturerOptions = result;
    });
    this.headquartersService.retrieveHeadquartersOptions().subscribe((result) => {
      this.headquartersOptions = result;
    });
    this.founderService.retrieveFounderOptions().subscribe((result) => {
      this.founderOptions = result;
    });
    this.manufacturerFormGroup = this.fb.group({
      'id': [null],
      'name': ['', Validators.required],
      'founded': [null],
      'founders': [[]],
      'headquarters': [null],
      'website': ['', [Validators.required, this.ValidateUrl]]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get('/api/manufacturer/' + id + '/get')
        .subscribe((response) => {
          this.manufacturerFormGroup.patchValue(response);
        });
    }
  }

  createManufacturer() {
    const manufacturer = this.manufacturerFormGroup.value;
    if (manufacturer.id) {
      this.http.put('/api/manufacturer/' + manufacturer.id + '/update', manufacturer)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.http.post('/api/manufacturer/create', manufacturer)
        .subscribe((response: any) => {
          this.router.navigate(['/manufacturer-form/' + response.id]);
        });
    }

  }

  deleteCar() {
    const car = this.manufacturerFormGroup.value;
    this.http.delete('/api/car/' + car.id + '/delete')
      .subscribe(() => {
        this.ngOnInit();
      });
  }
  ValidateUrl(control: AbstractControl) {
    if (!control.value.startsWith('www')) {
      return { validUrl: true };
    }
    return null;
  }
}
