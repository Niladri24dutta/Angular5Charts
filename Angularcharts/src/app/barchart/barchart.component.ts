import { Component, OnInit ,AfterViewInit} from '@angular/core';
import Chart from 'chart.js';
declare var Chart: any;

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit,AfterViewInit {

  
  chart: any[] = [];
  constructor() { }

  public CreateChart():void{
    var color = Chart.helpers.color;
    var chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Temp in degree Celcius',
				backgroundColor: color('rgb(54, 162, 235)').alpha(0.5).rgbString(),
				borderColor: `rgb(255, 99, 132)`,
				borderWidth: 1,
				data: [
					14,
					20,
					25,
					35,
					37,
					32,
					28
				]
      }]
        
    };
    this.chart = new Chart('canvas',{
      type: 'bar',
				data: chartData,
				options: {
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Chart.js Bar Chart demo'
          }
      }    
    });
  }
  ngOnInit() {
    this.CreateChart();
  }

  ngAfterViewInit(): void {
   
  }

}
