import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-weather-object',
  templateUrl: './weather-object.component.html',
  styleUrls: ['./weather-object.component.css']
})
export class WeatherObjectComponent implements OnInit {
private refresh=false;

 @Input('obj') obj;
 @Output () cityRemoveEvent = new EventEmitter<any>(); 
 @Output () cityRefreshEvent = new EventEmitter<any>(); 
 srcImage="";
  constructor(private weatherServiceService:WeatherServiceService) {
    
   }

  ngOnInit() {
  this.srcImage="http://openweathermap.org/img/w/"+this.obj.weather[0].icon+".png";
  }
  removeCity(){
  this.cityRemoveEvent.emit({ event:event, obj:this.obj });
  }
  refreshCity(){
    this.refresh=true;
    this.weatherServiceService.getCity(this.obj.name).subscribe(
      data => {
        this.refresh=false;
        this.cityRefreshEvent.emit({ event:event, obj:data });
      },
      err => {
        this.refresh=false;
        
      }
     );
  }

}
