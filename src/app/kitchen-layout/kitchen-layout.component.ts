import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Layout {
  name: string;
  image: string;
  selected: boolean;
}

@Component({
  selector: 'app-kitchen-layout',
  templateUrl: './kitchen-layout.component.html',
  styleUrls: ['./kitchen-layout.component.scss']
})
export class KitchenLayoutComponent {

  steps: string[] = ['KITCHEN LAYOUT', 'MEASUREMENTS', 'PACKAGE', 'GET QUOTE'];
  currentStep: number = 0;

  layouts: Layout[] = [
    { name: 'L-shaped', image: '/assets/L.png', selected: false },
    { name: 'Straight', image: '/assets/s.png', selected: false },
    { name: 'U-shaped', image: '/assets/u.png', selected: false },
    { name: 'Parallel', image: '/assets/p1.png', selected: false }
  ];

  selectLayout(selectedLayout: Layout): void {
    this.layouts.forEach(layout => layout.selected = layout === selectedLayout);
  }

  goBack(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goNext(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }








  // layoutSelected: string = '';

  // constructor(private router: Router) {}

  // selectLayout(layout: string) {
  //   this.layoutSelected = layout;
  // }

  // nextStep() {
  //   if (this.layoutSelected) {
  //     // Pass data using a service or router state
  //     this.router.navigate(['/measurements']);
  //   }
  // }

}
