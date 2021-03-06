import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChartItComponent } from './chart-it/chart-it.component';
import { 
  ChartModule,
  LineSeriesService,
  LegendService,
  TooltipService,
  DataLabelService,
  CategoryService
 } from '@syncfusion/ej2-angular-charts';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [
    AppComponent,
    ChartItComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    SliderModule
  ],
  providers: [
    ChartModule,
    LineSeriesService,
    LegendService,
    TooltipService,
    DataLabelService,
    CategoryService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
