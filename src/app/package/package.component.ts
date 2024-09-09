import { Component } from '@angular/core';

interface Essentials {
  title: string,
  description: string,
  image: string,
  features: string[],
  selected: boolean
}

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent {
  essentials = {
    title: 'Essentials (र 2,00,000)',
    description: 'A range of basic units and accessories that are necessary for a comfortable modular kitchen.',
    image: '../../assets/1.jpg',
    features: [
      'Affordable pricing',
      'Convenient designs',
      'Basic accessories'
    ],
    selected: false
  };
  essentials1 = {
    title: 'Premium (र 5,00,00)',
    description: 'An exquisite offering with sleek fixtures, hardware, cabinets and fittings for an elegant kitchen design.',
    image: '../../assets/2.jpg',
    features: [
      'Mid-range pricing',
'Premium designs',
'Wide range of accessories'
    ],
    selected: false

  };
  essentials2 = {
    title: 'Luxe (र 7,00,000)',
    description: 'A swanky kitchen package thats a fine blend of aesthetics and high functionality with chic-looking units and accessories.',
    image: '../../assets/3.jfif',
    features: [
      'Elite pricing',
      'Lavish designs',
      'Extensive range of accessories'
    ],
    selected: false

  };
  essentials3 = {
    title: 'Build your own package',
    description: 'A range of basic units and accessories that are necessary for a comfortable modular kitchen.',
    image: '',
    features: [
      'Affordable pricing',
      'Convenient designs',
      'Basic accessories'
    ],
    selected: false

  };

  content= [this.essentials, this.essentials1, this.essentials2, this.essentials3]

  selectLayout(selectedLayout: Essentials): void {
    this.content.forEach(layout => layout.selected = layout === selectedLayout);
  }
}
