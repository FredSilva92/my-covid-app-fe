import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appRoutes } from './routes';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { WorldTableComponent } from './world-table/world-table.component';
import { DashboardService } from './_services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { TableCasesComponent } from './dashboard/table-cases/table-cases.component';
import { DonutChartComponent } from './dashboard/donut-chart/donut-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSmartLoaderModule, NgxSmartLoaderService } from 'ngx-smart-loader';
import { LoadingMaskComponent } from './general-components/loading-mask/loading-mask.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      WorldMapComponent,
      DashboardComponent,
      StatisticsComponent,
      WorldTableComponent,
      TableCasesComponent,
      DonutChartComponent,
      LoadingMaskComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      NgxSmartLoaderModule.forRoot(),
      LeafletModule,
      MatSelectModule
   ],
   providers: [
      DashboardService,
      DatePipe,
      NgxSmartLoaderService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
