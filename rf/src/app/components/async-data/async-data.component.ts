import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-async-data',
  templateUrl: './async-data.component.html',
  styleUrls: ['./async-data.component.css'],
})
export class AsyncDataComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  obsValue = new Observable((observer) => {
    console.log('Observer starts!');
    setTimeout(() => {
      observer.next('90000');
    }, 1000);
  }).pipe(shareReplay());

  hounds: Observable<any> = this.getHoundList();

  getHoundList(): Observable<any> {
    return this.http.get<any>('https://dog.ceo/api/breed/hound/list');
  }
}
