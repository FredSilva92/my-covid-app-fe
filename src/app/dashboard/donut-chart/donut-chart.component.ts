import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { DashboardService } from '../../_services/dashboard.service';
import * as TimeUtils from '../../utils/TimeUtils';
import { getReportDate } from '../../utils/TimeUtils';
import { TotalCases } from '../../_models/totalCases';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  isDataLoaded: boolean;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {

    this.isDataLoaded = true;

    this.dashboardService.getTotalCases({
      reportDate: TimeUtils.getReportDate(-1),
      continent: 'EU'
    }).subscribe(
      data => {
        this.buildDonutChart(data);
      },
      error => console.log(error)
    );
  }

  private buildDonutChart(data: TotalCases) {
    const keys = Object.keys(data),
    chart = am4core.create('chart-div', am4charts.PieChart),
    pieSeries = chart.series.push(new am4charts.PieSeries());

    am4core.useTheme(am4themes_animated);

    keys.forEach((key) => {
    chart.data.push({
      categories: key,
      values: data[key]
    });
  });

    chart.innerRadius = am4core.percent(50);

    pieSeries.dataFields.value = 'values';
    pieSeries.dataFields.category = 'categories';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
  }

}
