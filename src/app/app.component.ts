import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  cityArr=[];
  constructor(private weatherServiceService:WeatherServiceService){

  }

  ngOnInit() {
  this.addCity();  
  }

  addCity(){
    this.weatherServiceService.getCity('Pune').subscribe(
      data => {this.cityArr.push(data) },
      err => {console.error(err)}
     );
  }
}
