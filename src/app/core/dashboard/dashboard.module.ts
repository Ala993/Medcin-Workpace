import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DashBoardRoutes, DashboardRoutingModule } from './dashboard-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ChartComponent } from './chart/chart.component';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AppointementsComponent } from './appointements/appointements.component';
import { PatientsComponent } from './patients/patients.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatTable, MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    DashBoardComponent,
    ChartComponent,
    OverviewComponent,
    AppointementsComponent,
    PatientsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashBoardRoutes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      }),
      MatTableModule,
      MatProgressBarModule
  ]
})
export class DashboardModule { }
