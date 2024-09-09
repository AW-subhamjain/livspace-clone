import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent {
  numbers: number[] = Array.from({length: 10}, (_, i) => i + 3);
  selectedNumber: number = 10;

  selectNumber(number: number) {
    this.selectedNumber = number;
  }
}
