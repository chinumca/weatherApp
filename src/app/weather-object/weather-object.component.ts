import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-object',
  templateUrl: './weather-object.component.html',
  styleUrls: ['./weather-object.component.css']
})
export class WeatherObjectComponent implements OnInit {
 @Input('obj') obj;
  constructor() { }

  ngOnInit() {
  }

}
