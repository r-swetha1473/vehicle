import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLineChartComponent } from './multi-line-chart.component';

describe('MultiLineChartComponent', () => {
  let component: MultiLineChartComponent;
  let fixture: ComponentFixture<MultiLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiLineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
