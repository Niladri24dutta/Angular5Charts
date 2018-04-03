import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {WeatherService} from '../weather.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  chart: any[] = [];
  @ViewChild('graphcanvas') lineChartCanvas:ElementRef;
  constructor(private _weather:WeatherService) { }

  ngOnInit() {
    this._weather.dailyWeatherUpdate().subscribe(res => {
      console.log(res);
    })
  }

}
