import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class WeatherServiceService {

  constructor(private http:HttpClient) { }

  getCity(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=6601a2cdedfb4f28a9a14d39a90e20ed');
  }

}
