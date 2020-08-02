import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/_services/dashboard.service';
import { TotalCases } from 'src/app/_models/totalCases';
import { TotalCasesRequest } from '../../_models/totalCasesRequest';
import * as TimeUtils from '../../utils/TimeUtils';

@Component({
  selector: 'app-table-cases',
  templateUrl: './table-cases.component.html',
  styleUrls: ['./table-cases.component.scss']
})
export class TableCasesComponent implements OnInit{

  isDataLoaded: boolean;
  isError: boolean;
  data: TotalCases;

  constructor(private dashboardService: DashboardService) {

  }
  ngOnInit(): void {
    const requestData: TotalCasesRequest = {
        reportDate: TimeUtils.getReportDate(-1),
        continent: ''
      };

    this.dashboardService.getTotalCases(requestData).subscribe(
      data => {
        console.log('Success');
        this.data = data;
        this.isDataLoaded = true;
      },
      error => {
        this.isError = true;
        this.isDataLoaded = true;
        console.log('Error');
        console.log(error);
      });
  }
}
