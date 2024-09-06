import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent {
  measurementA: number = 8;
  measurementB: number = 8;

  constructor(private router: Router) {}

  nextStep() {
    // Pass data via a service or router state
    this.router.navigate(['/package']);
  }
}
