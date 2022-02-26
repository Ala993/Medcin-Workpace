import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAppointementsComponent } from './list-appointements/list-appointements.component';


export const AppointementsRouting: Routes = [{
  path: '',
  redirectTo: 'rendez-vous',
  pathMatch: 'full',
},{
  path: '',
  children: [
    {
      path: '',
      component: ListAppointementsComponent
    },
   
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(AppointementsRouting)],
  exports: [RouterModule]
})
export class AppointementsRoutingModule { }
