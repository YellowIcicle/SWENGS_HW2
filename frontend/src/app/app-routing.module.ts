import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarListComponent} from './car-list/car-list.component';
import {CarFormComponent} from './car-form/car-form.component';
import {ManufacturerFormComponent} from './manufacturer-form/manufacturer-form.component';
import {ManufacturerListComponent} from './manufacturer-list/manufacturer-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  { path: 'car-list', component: CarListComponent, canActivate: [AuthGuard] },
  { path: 'car-form', component: CarFormComponent, canActivate: [AuthGuard] },
  { path: 'manufacturer-list', component: ManufacturerListComponent, canActivate: [AuthGuard] },
  { path: 'manufacturer-form', component: ManufacturerFormComponent, canActivate: [AuthGuard] },
  { path: 'car-form/:id', component: CarFormComponent, canActivate: [AuthGuard]},
  { path: 'manufacturer-form/:id', component: ManufacturerFormComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'car-list', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
