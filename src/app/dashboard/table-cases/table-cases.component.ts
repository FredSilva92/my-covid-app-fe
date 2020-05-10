import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/_services/dashboard.service';
import { DatePipe } from '@angular/common';
import { TotalCases } from 'src/app/_models/totalCases';

@Component({
  selector: 'app-table-cases',
  templateUrl: './table-cases.component.html',
  styleUrls: ['./table-cases.component.scss']
})
export class TableCasesComponent implements OnInit {

  private dateToday: Date = new Date();
  // This also gives you todays date if you don't alter it on init.
  private dateYesterday: Date = new Date();
  data: TotalCases;

  constructor(private dashboardService: DashboardService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    const requestData: any = {};
    let previousDay = new Date(this.dateYesterday.setDate(this.dateYesterday.getDate() - 1));


    requestData.reportDate = this.datePipe.transform(previousDay, 'MM-dd-yyyy');
    requestData.continent = '';

    this.dashboardService.getTotalCases(requestData).subscribe(
      data => {
        console.log('Success');
        this.data = data;
      },
      error => {
        console.log('Error');
        console.log(error);
    });
  }

}
