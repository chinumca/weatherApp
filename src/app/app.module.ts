import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherObjectComponent } from './weather-object/weather-object.component';
import { WeatherServiceService } from './weather-service.service'
import { SessionServiceService } from './session-service.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherObjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherServiceService, SessionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
