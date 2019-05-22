import { Injectable } from '@angular/core';
import { TestData } from './test-data.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataBufferService {

  maxLength: number = 0;
  source: Observable<TestData> = null;
  observer: Subject<TestData[]> = new Subject<TestData[]>();
  dataArray: Array<TestData> = [];

  constructor() { }

  public initialize(source: Observable<TestData>, maxLength: number): Observable<TestData[]> {
    this.source = source;
    this.maxLength = maxLength;

    // Populate the data array with max length items
    let count = this.dataArray.length;
    while (this.dataArray.length < maxLength) {
      this.dataArray.push({index: count++});
    }
    source.subscribe((data: TestData) => {
      if (this.dataArray.length >= maxLength) {
        // Remove the oldest entry in the array
        this.dataArray.shift();
      }

      // And add in the new data
      this.dataArray.push(data);

      // And tell our client
      this.observer.next(this.dataArray);
    });
    return this.observer;
  }


}
