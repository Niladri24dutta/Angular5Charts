import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/jsonp' })
};

httpOptions.headers.append('Access-Control-Allow-Origin' , '*');

@Injectable()
export class WeatherService {
 
  constructor(private _http:HttpClient) { }

  dailyWeatherUpdate(){
    return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22",httpOptions)
                      .map((result:any) => result );
  }

}
