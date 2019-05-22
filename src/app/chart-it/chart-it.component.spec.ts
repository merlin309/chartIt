import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartItComponent } from './chart-it.component';

describe('ChartItComponent', () => {
  let component: ChartItComponent;
  let fixture: ComponentFixture<ChartItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
