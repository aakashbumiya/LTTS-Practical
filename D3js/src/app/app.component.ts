import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'D3js';
  showBar = true;
  showPie = false;
  showLine = false;
  chartData = [];
  lineChartData =
    [
      {
        "value": 20,
        "date": "2020-05-12T12:19:00+00:00"
      },
      {
        "value": 50,
        "date": "2020-05-14T12:19:00+00:00"
      },
      {
        "value": 30,
        "date": "2020-05-16T12:19:00+00:00"
      },
      {
        "value": 80,
        "date": "2020-05-18T12:19:00+00:00"
      },
      {
        "value": 55,
        "date": "2020-05-20T12:19:00+00:00"
      },
      {
        "value": 60,
        "date": "2020-05-22T12:19:00+00:00"
      },
      {
        "value": 45,
        "date": "2020-05-24T12:19:00+00:00"
      },
      {
        "value": 30,
        "date": "2020-05-26T12:19:00+00:00"
      },
      {
        "value": 40,
        "date": "2020-05-28T12:19:00+00:00"
      },
      {
        "value": 70,
        "date": "2020-05-30T12:19:00+00:00"
      },
      {
        "value": 63,
        "date": "2020-06-01T12:19:00+00:00"
      },
      {
        "value": 40,
        "date": "2020-06-03T12:19:00+00:00"
      },
      {
        "value": 50,
        "date": "2020-06-05T12:19:00+00:00"
      },
      {
        "value": 75,
        "date": "2020-06-07T12:19:00+00:00"
      },
      {
        "value": 20,
        "date": "2020-06-09T12:19:00+00:00"
      },
      {
        "value": 50,
        "date": "2020-06-11T12:19:00+00:00"
      },
      {
        "value": 80,
        "date": "2020-06-13T12:19:00+00:00"
      },
      {
        "value": 75,
        "date": "2020-06-15T12:19:00+00:00"
      },
      {
        "value": 82,
        "date": "2020-06-17T12:19:00+00:00"
      },
      {
        "value": 55,
        "date": "2020-06-19T12:19:00+00:00"
      },
      {
        "value": 35,
        "date": "2020-06-21T12:19:00+00:00"
      },
      {
        "value": 34,
        "date": "2020-06-23T12:19:00+00:00"
      },
      {
        "value": 45,
        "date": "2020-06-25T12:19:00+00:00"
      },
      {
        "value": 58,
        "date": "2020-06-27T12:19:00+00:00"
      },
      {
        "value": 34,
        "date": "2020-06-29T12:19:00+00:00"
      },
      {
        "value": 60,
        "date": "2020-07-01T12:19:00+00:00"
      },
      {
        "value": 75,
        "date": "2020-07-03T12:19:00+00:00"
      },
      {
        "value": 80,
        "date": "2020-07-05T12:19:00+00:00"
      },
      {
        "value": 29,
        "date": "2020-07-07T12:19:00+00:00"
      },
      {
        "value": 40,
        "date": "2020-07-09T12:19:00+00:00"
      },
      {
        "value": 54,
        "date": "2020-07-11T12:19:00+00:00"
      },
      {
        "value": 67,
        "date": "2020-07-13T12:19:00+00:00"
      },
      {
        "value": 90,
        "date": "2020-07-15T12:19:00+00:00"
      },
      {
        "value": 84,
        "date": "2020-07-17T12:19:00+00:00"
      },
      {
        "value": 43,
        "date": "2020-07-19T12:19:00+00:00"
      }
    ]
  pieChartData = [
    { tech: '.net', percentage: 56 },
    { tech: 'React', percentage: 18 },
    { tech: 'Vue', percentage: 10 },
    { tech: 'NodeJs', percentage: 5 },
    { tech: 'Python', percentage: 5 },
    { tech: 'Java', percentage: 7 },
    { tech: 'Angular', percentage: 10 }
  ]

  ngOnInit() {
    setTimeout(() => {
      this.generateData();
      // change the data periodically
      setInterval(() => this.generateData(), 5000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

  showBarchart() {
    this.showBar = true;
    this.showPie = false;
    this.showLine = false;
  }

  showLinechart() {
    this.showBar = false;
    this.showPie = false;
    this.showLine = true;
  }

  showPiechart() {
    this.showBar = false;
    this.showPie = true;
    this.showLine = false;
  }
}
