import { Component, NgModule } from '@angular/core';
import { Chart, Colors } from 'chart.js/auto';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public chart: any;
  public chart2: any;
  public roles = JSON.parse(localStorage.getItem('roles') || '');

  constructor(private router: Router) {}

  ngOnInit() {
    this.createChart();
  }

  async importRouter() {
    const zipUtil = await import('../products/products.component');

    const dynamicRoute = {
      path: 'dynamic',
      component: zipUtil['ProductsComponent'],
    };
    console.log(this.router.config);
    this.router.resetConfig(this.router.config);
    this.router.config.push(dynamicRoute);
    this.router.config = this.router.config.filter(function (item) {
      return item.path !== 'products';
    });
    this.router.navigateByUrl('dynamic');
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
        maintainAspectRatio: false,
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
        maintainAspectRatio: false,
      },
    });
  }
}
