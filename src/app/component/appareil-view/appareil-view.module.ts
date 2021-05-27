import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

import { AppareilViewComponent } from './appareil-view.component';
import { AppareilService } from 'src/app/service/appareil.service';
import { AuthService } from 'src/app/service/auth.service';
import { AppareilModule } from '../appareil/appareil.module';
import { AuthGuardService } from 'src/app/service/auth-guard.service';


const routes: Routes = [
  { path: '', component: AppareilViewComponent },
];

@NgModule({
  declarations: [
    AppareilViewComponent
  ],
  imports: [
    CommonModule,
    AppareilModule,  
    SweetAlert2Module.forRoot(),
    FormsModule,
    RouterModule.forChild(routes),
  ], 
  providers: [
    AppareilService,
    AuthService,
    AuthGuardService
  ],
  exports: [
    AppareilViewComponent
  ]
})
export class AppareilViewModule { }
