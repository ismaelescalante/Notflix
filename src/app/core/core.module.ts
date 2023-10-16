import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class CoreModule { }
