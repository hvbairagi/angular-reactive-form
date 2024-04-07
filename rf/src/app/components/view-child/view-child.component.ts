import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent implements OnInit {
  value = 0;

  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
