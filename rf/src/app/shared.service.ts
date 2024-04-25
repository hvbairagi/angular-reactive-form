import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {
    console.log('An Http call');
  }

  mySharedFunction() {
    console.log('testing');
  }
}
