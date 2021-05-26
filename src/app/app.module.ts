import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './component/blog/post-list/post-list.component';
import { PostListItemComponent } from './component/blog/post-list-item/post-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanvasDomModule } from 'angular-canvas';
import { GraphLineElement } from './model/class/graph-line-element';
import { CanvasComponent } from './component/canvas/canvas.component';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { AppareilViewComponent } from './component/appareil-view/appareil-view.component';
import { AppareilComponent } from './component/appareil/appareil.component';

const routes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  // { path: 'auth', component: AuthComponent },
  { path: 'blog', component: BlogComponent},
  { path: '', component: HomeComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    CanvasComponent,
    HomeComponent,
    BlogComponent,
    AppareilViewComponent,
    AppareilComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // AppRoutingModule,
    FormsModule,
    NgbModule,
    CanvasDomModule.forRoot(
      [
        GraphLineElement
      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
