import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';

export const DashBoardRoutes: Routes = [{
  path: '',
  component: DashBoardComponent,
  children: [
    {
      path: '',
      component: DashBoardComponent
    },
    ]
}];


@NgModule({
  imports: [RouterModule.forChild(DashBoardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
