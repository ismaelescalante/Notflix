import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from '../core/core.module';
import { SpinnerComponent } from '../shared/spinner/spinner.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CoreModule,
    SpinnerComponent
  ]
})
export class MainModule { }
