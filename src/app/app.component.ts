import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';
import { SessionServiceService } from './session-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  cityArr=[];
  newCity="";
  errorCity=false;
  constructor(private weatherServiceService:WeatherServiceService, private sessionServiceService:SessionServiceService){

  }

  ngOnInit() {
    console.log("oninit");
    this.cityArr = this.sessionServiceService.getAllCities();
//  this.addCity();  
  }

  addCity(){
   
    this.weatherServiceService.getCity(this.newCity).subscribe(
      data => {
        this.cityArr.push(data); 
        this.sessionServiceService.setAllCities(this.cityArr);
        this.newCity = ""; 
      },
      err => {
        this.errorCity=true;
        setTimeout(() => {this.newCity = ""; this.errorCity=false;},2000);
      }
     );
  }
}
