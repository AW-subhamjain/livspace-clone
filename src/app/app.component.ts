import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { KitchenDataService } from './kitchen-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'livspace-clone';

  currentStep: number = 1

  constructor(private router: Router, private ks: KitchenDataService) {
    // this.ks.currentStep.subscribe(data=>
    // this.currentStep = data
    // )
  }

  ngOnInit(){
   
  }

  goBack(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
    if(this.currentStep==1)
      {
        this.router.navigate([""])
      }
      
      if (this.currentStep == 2)
        this.router.navigate(["/measurements"])
      if (this.currentStep == 3)
        this.router.navigate(["/package"])
      if (this.currentStep == 4)
        this.router.navigate(["/quote"])
  }


  goNext(): void {

  if (this.currentStep < 4) {
      this.currentStep++;
    }
    if(this.currentStep==1)
      {
        this.router.navigate([""])
      }
      
      if (this.currentStep == 2)
        this.router.navigate(["/measurements"])
      if (this.currentStep == 3)
        this.router.navigate(["/package"])
      if (this.currentStep == 4)
        this.router.navigate(["/quote"])
  }
}
