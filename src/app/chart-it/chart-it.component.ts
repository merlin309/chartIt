import { Component, OnInit, ViewChild } from '@angular/core';
import { TestDataService, TestData } from '../test-data.service';
import { DataBufferService } from '../data-buffer.service';
import { ChartOptions } from '../chartOptions';
import { ChartComponent, ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';
import { SliderTooltipEventArgs } from '@syncfusion/ej2-inputs';
 
@Component({
  selector: 'app-chart-it',
  templateUrl: './chart-it.component.html',
  styleUrls: ['./chart-it.component.css']
})
export class ChartItComponent {
  chartOptions: ChartOptions = {
    title: 'Random Data Flowing In',
    data: [{ index: 0, value: 0}],
    primaryXAxis: { valueType: 'Double' },
    primaryYAxis: { minimum: 0, maximum: 100 },
    legend: { visible: false},
    marker: { dataLabel: { visible: false}},
    tooltip: { enable: false},
    animations: { enable: false}
  }

  tooltip: Object ={ placement: 'After', isVisible: true, showOn: 'Always' };
  limits: Object = { enabled: true, minStart: 5, maxEnd: 500};

  index = 0;
  testData: TestDataService = new TestDataService();
  bufferedData: DataBufferService = new DataBufferService();
  interval = 10;

  @ViewChild('chartContainer')
  public chart: ChartComponent;

  constructor() { 
  }

  public loaded(args: ILoadedEventArgs) {
    this.startReading(this.interval);
  }

  private startReading(interval: number): void {
    this.bufferedData.initialize(this.testData.getTestData(interval), 200).subscribe((td: TestData[]) => {
        this.chartOptions.data = td;
        this.chart.series[0].dataSource = this.chartOptions.data;
        this.chart.refresh();
    });
  }

  public stop(args: ILoadedEventArgs) {
    this.testData.stopTestData();
  }

  tooltipChangeHandler(args: SliderTooltipEventArgs): void {
    args.text = args.value + "ms";
  }

  sliderValueChanged(object: any) {
    this.testData.stopTestData();
    this.startReading(object.value);
  }
}
