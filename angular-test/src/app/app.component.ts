import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  getResponse = {};
  postResponse = {};
  mode = 'START';
  constructor(private appService: AppService) {
  }

  ngOnInit() {

  }

  getData() {
    this.appService.getData().subscribe(res => {
      console.log(res);
      this.getResponse = res;
    })
  }

  postData() {
    let obj = {
      mode: this.mode
    }
    this.appService.postData(obj).subscribe(res => {
      console.log(res);
      this.postResponse = res;
    })
  }
}



