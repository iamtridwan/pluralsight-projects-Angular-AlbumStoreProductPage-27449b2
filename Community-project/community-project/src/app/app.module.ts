import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LearnersComponent } from './components/learners/learners.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { BusinessComponent } from './components/learners/business/business.component';
import { PhotoComponent } from './components/learners/photo/photo.component';
import { DevComponent } from './components/learners/dev/dev.component';
import { DesignComponent } from './components/learners/design/design.component';
import { SoftwareComponent } from './components/learners/software/software.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LearnersComponent,
    SponsorsComponent,
    BusinessComponent,
    PhotoComponent,
    DevComponent,
    DesignComponent,
    SoftwareComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
