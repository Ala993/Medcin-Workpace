import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }
  name = 'Angular   6';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ["janv", "fev", "mars", "avril", "mai", "juin", "juillet"],
       
        datasets: [{
          label: 'Adults',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          labelString: 'probability'
          
        },
        {
          label: 'Enfants',
          data: [10, 39, 61, 42, 7, 26, 56],
          fill: false,
          borderColor: 'rgb(5, 20, 192)',

        },
        ],
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          },
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              text: {
                labelString: 'Länge',
                display: true,
              },
            }]      ,
            yAxes: [{
              type: 'linear',
             
              text: {
                labelString: 'Länge',
                display: true,
              },
            }]      
        }
      }
    }
    });
  }
  ngOnInit(): void {
  }

}
