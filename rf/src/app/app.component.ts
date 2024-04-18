import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from './components/view-child/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('tem_ref_var', { static: true }) child: ViewChildComponent;
  @ViewChild('para', { static: true }) p: ElementRef;
  value = true;

  constructor() {}

  ngOnInit() {}

  increment() {
    this.child.increment();
  }

  decrement() {
    this.child.decrement();
  }

  changePara() {
    this.p.nativeElement.innerText = 'Bye guys';
  }
}
