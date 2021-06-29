import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';



@NgModule({
  declarations: [BarchartComponent, LinechartComponent, PiechartComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BarchartComponent,
    LinechartComponent,
    PiechartComponent
  ]
})
export class SharedModule { }
