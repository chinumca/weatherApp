import { Injectable } from '@angular/core';

@Injectable()
export class SessionServiceService {

  constructor() { }

  setAllCities(_cityArr){
    let cityArr:any=[];
    cityArr=JSON.stringify(_cityArr);

    sessionStorage.setItem('citiesDetails',cityArr);
  }
  getAllCities(){
    let cityArr:any=[];
    
    if(sessionStorage.getItem('citiesDetails'))
    {
      cityArr = JSON.parse(sessionStorage.getItem('citiesDetails'));
    }
    
    return cityArr;
  }
}
