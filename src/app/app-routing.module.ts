import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { AppareilViewComponent } from './component/appareil-view/appareil-view.component';

const routes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  // { path: 'auth', component: AuthComponent },
  { path: 'blog', component: BlogComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
