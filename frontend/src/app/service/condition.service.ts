import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {

  conditionNames = {
    v: 'very good',
    g: 'good',
    k: 'ok',
    b: 'bad'
  };
  constructor() { }
}
