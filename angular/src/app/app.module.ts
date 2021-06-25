import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthServiceService } from './services/auth-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserGetService } from './services/user-get.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthServiceService,
    UserGetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }