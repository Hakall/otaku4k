import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationModule} from './navigation/navigation.module';
import {HomeModule} from './home/home.module';
import {HttpClientModule} from '@angular/common/http';
import {FansModule} from './fans/fans.module';
import {BandModule} from './band/band.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NavigationModule,
    HomeModule,
    BandModule,
    FansModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
