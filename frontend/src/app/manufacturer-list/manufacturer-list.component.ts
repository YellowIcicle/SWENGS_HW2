import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ManufacturerService} from '../service/manufacturer.service';
import {CountryService} from '../service/country.service';

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.scss']
})
export class ManufacturerListComponent implements OnInit {

  displayedColumns = ['name', 'founded', 'headquarters', 'website'];
  manufacturers: any[];

  constructor(private http: HttpClient, private manufacturerService: ManufacturerService, private countryService: CountryService) { }

  ngOnInit() {
    this.http.get('/api/manufacturer/list')
      .subscribe((response: any[]) => {
        this.manufacturers = response;
      });
  }

  deleteManufacturer(manufacturer: any) {
    this.manufacturerService.deleteManufacturer(manufacturer)
      .subscribe( () => {
        this.ngOnInit();
      });
  }

}
