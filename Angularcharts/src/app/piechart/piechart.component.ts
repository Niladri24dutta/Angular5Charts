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

  public createConfig(chartType:string):any{
    var config = {
			type: chartType,
			data: {
				datasets: [{
					data: [
						45,
						65,
						50,
						60,
						85
					],
					backgroundColor: [
						'rgb(75, 192, 192)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
          ],
          borderColor : 'rgb(201, 203, 207)' ,
          borderWidth:1,
          hoverBorderWidth:2,
					label: 'Runs scored by top 5 batsman in an innings'
				}],
				labels: [
					'Dravid',
					'Laxman',
					'Ganguly',
					'Virat',
					'Sachin'
				]
			},
			options: {
        title: {
          display: true,
          text: 'Runs scored by top 5 batsman in an innings'
        },
        responsive: true,
        animation:{
          animateRotate: true,
          animateScale:true
        }
			}
    };
    
    return config;
  }

  public CreatePieChart():void{
    var pieConfig = this.createConfig('pie');
    this.piechart = new Chart('piecanvas',pieConfig);
  }
  public CreateDoughnutChart():void{
   var dntConfig = this.createConfig('doughnut');
   this.dntchart = new Chart('dntcanvas',dntConfig);
  }
}
