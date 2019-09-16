import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MaterialModules} from './materialModules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { Page404Component } from './components/page404/page404.component';
import { RouterModule } from '@angular/router';

//services
import { AuthService } from './services/auth.service';
import { DataApiService } from './services/data-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    Page404Component
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
