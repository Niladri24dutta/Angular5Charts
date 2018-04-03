import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {WeatherService} from '../weather.service';
import Chart from 'chart.js';
declare var Chart: any;
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
      //console.log(res);
      let maxTemperature = res['list'].map(res => res.main.temp_max);
      let minTemperature = res['list'].map(res => res.main.temp_min);
      let allDatesinRange = res['list'].map(res => res.dt)
      
      let displayDates = [];

      allDatesinRange.forEach((val:any) => {
        let currDate = new Date(val * 1000);
        displayDates.push(currDate.toLocaleTimeString('en',{ year: 'numeric', month: 'short', day: 'numeric' }));
      });
      let ctx = this.lineChartCanvas.nativeElement.getContext('2d');
      this.chart = new Chart(ctx,{
        type: 'line',
        data: {
          labels: displayDates,
          datasets: [
            { 
              data: maxTemperature,
              borderColor: "#3cba9f",
              fill: false
            },
            { 
              data: minTemperature,
              borderColor: "#ffcc00",
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      })
    });
  }

}
