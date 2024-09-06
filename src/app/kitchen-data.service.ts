import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitchenDataService {

  layout: string = '';
  measurementA: number = 0;
  measurementB: number = 0;

  currentStep = new BehaviorSubject(1);

  constructor() {}

  

  saveLayout(layout: string) {
    this.layout = layout;
  }

  saveMeasurements(a: number, b: number) {
    this.measurementA = a;
    this.measurementB = b;
  }
}
