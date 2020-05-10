import { Routes } from '@angular/router';
import { WorldMapComponent } from './world-map/world-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorldTableComponent } from './world-table/world-table.component';
import { StatisticsComponent } from './statistics/statistics.component';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'worldmap', component: WorldMapComponent },
    { path: 'worldtable', component: WorldTableComponent },
    { path: 'statistics', component: StatisticsComponent},
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
