import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppareilViewModule } from './component/appareil-view/appareil-view.module';
import { AppareilModule } from './component/appareil/appareil.module';

import { AppComponent } from './app.component';
import { PostListComponent } from './component/blog/post-list/post-list.component';
import { PostListItemComponent } from './component/blog/post-list-item/post-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanvasComponent } from './component/canvas/canvas.component';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { AuthComponent } from './component/auth/auth.component';
import { ErrorComponent } from './component/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    CanvasComponent,
    HomeComponent,
    BlogComponent,
    AuthComponent,
    ErrorComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppareilViewModule,
    AppareilModule, 
    FormsModule,
    NgbModule,

    ],
    providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
