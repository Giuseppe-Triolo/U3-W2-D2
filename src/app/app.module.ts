import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { AppRoutingModule } from './app-routing.module';
import { Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'active',
    component: ActivePostsComponent,
  },

  {
    path: 'inactive',
    component: InactivePostsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
