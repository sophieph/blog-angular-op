import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { AppareilViewComponent } from './component/appareil-view/appareil-view.component';
import { AuthComponent } from './component/auth/auth.component';
import { SingleAppareilComponent } from './component/appareil/single-appareil/single-appareil.component';
import { AuthGuardService } from './service/auth-guard.service';
import { ErrorComponent } from './component/error/error.component';

const routes: Routes = [
  { path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent },
  {
    path: 'appareils',
    loadChildren: () => import('./component/appareil-view/appareil-view.module')
      .then(mod => mod.AppareilViewModule)
  },
  { path: 'auth', component: AuthComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'home', component: HomeComponent },
  { path: '', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
