import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  title = 'Spending Statistics'
   LineChart = [];
  constructor() { }

  ngOnInit() {
    this.LineChart = new Chart('lineChart', {
      type : 'line', data : {
        labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec"],
        dataset : [{
          label : 'Your spending Over the year',
          data : [9,7,3,3,2,4,9,15,18,22,30,50],
          fill : false,
          lineTension : 0.2,
          borderColor: 'green',
          borderWidth : 1
        }]
      },
      options : {
        title : {
          text : 'Over View',
          display : true
        },
        scales : {
          yAxes : [{
            ticks : {
              beginAtZeero : true
            }
          }]
        }
      }
    });
  }

}
