import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './component/blog/post-list/post-list.component';
import { PostListItemComponent } from './component/blog/post-list-item/post-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanvasComponent } from './component/canvas/canvas.component';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { AppareilViewComponent } from './component/appareil-view/appareil-view.component';
import { AppareilComponent } from './component/appareil/appareil.component';
import { AppareilIdComponent } from './component/appareil/appareil-id/appareil-id.component';
import { AuthComponent } from './component/auth/auth.component';

import { NotFoundComponent } from './component/not-found/not-found.component';

import { AppareilService } from './service/appareil.service';
import { AuthService } from './service/auth.service';

import { AppareilViewModule } from './component/appareil-view/appareil-view.module';

const routes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: AppareilIdComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'blog', component: BlogComponent},
  { path: '', component: HomeComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    CanvasComponent,
    HomeComponent,
    BlogComponent,
    // AppareilViewComponent,
    AppareilComponent,
    AppareilIdComponent,
    NotFoundComponent,
    AuthComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // AppRoutingModule,
    FormsModule,
    NgbModule,
    SweetAlert2Module.forRoot(),

    ],
    providers: [
      AppareilService,
      AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
