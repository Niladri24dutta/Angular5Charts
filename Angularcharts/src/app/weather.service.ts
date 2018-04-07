import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class WeatherService {
 
  constructor(private _http:HttpClient) { }

  dailyWeatherUpdate(){
    return this._http.get(environment.API_URL+"api/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
                      .map((result:any) => result );
  }

}
