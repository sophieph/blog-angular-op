import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppareilComponent } from './appareil.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';



@NgModule({
  declarations: [
    AppareilComponent,
    SingleAppareilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AppareilComponent
  ]
})
export class AppareilModule { }
