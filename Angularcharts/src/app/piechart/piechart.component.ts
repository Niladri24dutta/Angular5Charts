import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
declare var Chart: any;

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  piechart: any[] = [];
  dntchart: any[] = [];
  constructor() { }

  ngOnInit() {
    this.CreatePieChart();
    this.CreateDoughnutChart();
  }

  public CreatePieChart():void{
    
  }

  public CreateDoughnutChart():void{

  }
}
