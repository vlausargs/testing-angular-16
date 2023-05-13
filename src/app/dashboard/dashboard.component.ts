import { Component, NgModule } from '@angular/core';
import { Chart, Colors } from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public chart: any;
  public chart2: any;

  ngOnInit() {
    this.createChart();
  }
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17'],
        datasets: [
          {
            label: 'Sales',
            data: ['92', '574', '573', '576'],
          },
          {
            label: 'Profit',
            data: ['17', '0.00', '538', '541'],
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
    this.chart2 = new Chart('MyChart2', {
      data: {
        // values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13'],
        datasets: [
          {
            type: 'line', //this denotes tha type of chart
            label: 'Sales',
            data: ['467', '576', '572', '79'],
          },
          {
            type: 'bar', //this denotes tha type of chart
            label: 'Profit',
            data: ['542', '542', '536', '327'],
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
