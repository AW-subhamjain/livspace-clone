import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchenLayoutComponent } from './kitchen-layout/kitchen-layout.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { PackageComponent } from './package/package.component';
import { QuoteComponent } from './quote/quote.component';
import { ProgressCheckpointComponent } from './progress-checkpoint/progress-checkpoint.component';

@NgModule({
  declarations: [
    AppComponent,
    KitchenLayoutComponent,
    MeasurementsComponent,
    PackageComponent,
    QuoteComponent,
    ProgressCheckpointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
