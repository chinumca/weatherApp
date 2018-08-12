import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { SessionServiceService } from '../session-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {
  cityArr=[];
  newCity="";
  errorCity=false;
  
  constructor(private weatherServiceService:WeatherServiceService, private sessionServiceService:SessionServiceService) {
    
   }

  ngOnInit() {
    this.cityArr = this.sessionServiceService.getAllCities();
  }
  addCity(){
    var foundIndex = this.cityArr.findIndex(x => x.name.toLowerCase() == this.newCity.toLowerCase());
    if(foundIndex>-1){
      alert("City "+this.newCity+" allready present");
      this.newCity = "";
      return;
    }
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
  removeAllCities(){
    this.cityArr=[];
    this.sessionServiceService.setAllCities(this.cityArr);
  }
  removeCity(event){
  var foundIndex = this.cityArr.findIndex(x => x.name == event.obj.name);
  this.cityArr.splice(foundIndex,1)
  this.sessionServiceService.setAllCities(this.cityArr);
  }
  refreshCity(event){
    var foundIndex = this.cityArr.findIndex(x => x.name == event.obj.name);
    this.cityArr[foundIndex]=event.obj;
    this.sessionServiceService.setAllCities(this.cityArr);
  }
  refreshAllCities(){
    //refresh all
  }
}
