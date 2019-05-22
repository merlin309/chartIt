import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { timer } from 'rxjs/observable/timer';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

export class TestData {
  value?: number;
  index?: number;
}

@Injectable()
export class TestDataService {
  index: number = 0;
  observer: Subject<TestData> = new Subject<TestData>();
  time: number = 0;
  timer$: Observable<number>;
  timerSubscription: Subscription;
  constructor() { }

  public initialIndex(i: number) {
    this.index = i;
  }
  public getTestData(time: number): Observable<TestData> {
    this.time = time;
    const observer: Subject<TestData> = new Subject<TestData>();
    this.timer$ = timer(this.time, this.time);
    this.timerSubscription = this.timer$.subscribe(n => {
      console.log(this.time);
      observer.next({ value: Math.floor((Math.random() * 100) + 1), index: ++this.index} );
    });
    return observer;
  }

  public stopTestData() {
    this.timerSubscription.unsubscribe();
  }
}
