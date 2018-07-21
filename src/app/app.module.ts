import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { WeatherObjectComponent } from './weather-object/weather-object.component';
import { WeatherServiceService } from './weather-service.service'
@NgModule({
  declarations: [
    AppComponent,
    WeatherObjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
