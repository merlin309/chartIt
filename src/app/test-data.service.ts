import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { timer } from 'rxjs/observable/timer';

export class TestData {
  value?: number;
  index?: number;
}

@Injectable()
export class TestDataService {
  flag = true;
  index: number = 0;
  observer: Subject<TestData> = new Subject<TestData>();

  constructor() { }

  public initialIndex(i: number) {
    this.index = i;
  }
  public getTestData(time: number): Observable<TestData> {
    this.flag = true;
    const observer: Subject<TestData> = new Subject<TestData>();
    timer(time, time).subscribe(n => {
      observer.next({ value: Math.floor((Math.random() * 100) + 1), index: ++this.index} );
      if (!this.flag) {
        observer.complete();
      }
    });
    return observer;
  }

  public stopTestData() {
    this.flag = false;
  }
}
