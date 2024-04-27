import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'unit-testing';
  btnText = 'Subscribe';
  isSubscribed = false;

  constructor() {}

  ngOnInit() {}

  subscribe() {
    setTimeout(() => {
      this.isSubscribed = true;
      this.btnText = 'Subscribed';
    }, 1000);
  }
}
