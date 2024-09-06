import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { KitchenDataService } from '../kitchen-data.service';

@Component({
  selector: 'app-progress-checkpoint',
  templateUrl: './progress-checkpoint.component.html',
  styleUrls: ['./progress-checkpoint.component.scss']
})
export class ProgressCheckpointComponent {
   currentStep: number = 1;

  constructor(private service: KitchenDataService) {}


  ngOnInit(): void {
    // Update currentStep based on the current route
    // this.service.currentStep.subscribe(data=> this.currentStep=data)
   
}
}