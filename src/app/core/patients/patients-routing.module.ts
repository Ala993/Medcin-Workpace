import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPatientsComponent } from './detail-patients/detail-patients.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';

export const PatientsRoutes: Routes = [{
  path: '',
  redirectTo: 'patients',
  pathMatch: 'full',
},{
  path: "",
  children: [
    {
      path: '',
      component: ListPatientsComponent
    },
    {
      path: 'detailsPatient',
      component: DetailPatientsComponent
    },
    {
      path: 'editPatient/:id',
      component: DetailPatientsComponent
    },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(PatientsRoutes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
