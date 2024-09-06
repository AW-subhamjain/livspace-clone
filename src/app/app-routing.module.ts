import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenLayoutComponent } from './kitchen-layout/kitchen-layout.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { PackageComponent } from './package/package.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: '', redirectTo: '/kitchen-layout', pathMatch: 'full' }, // Redirect to the first step
  { path: 'kitchen-layout', component: KitchenLayoutComponent },   // Route for Kitchen Layout step
  { path: 'measurements', component: MeasurementsComponent },      // Route for Measurements step
  { path: 'package', component: PackageComponent },                // Route for Package step
  { path: 'quote', component: QuoteComponent },                    // Route for Get Quote step
  { path: '**', redirectTo: '/kitchen-layout' }                    // Redirect any unmatched routes to Kitchen Layout
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
