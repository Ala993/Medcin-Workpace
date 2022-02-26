import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './services/auth/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'session',
    pathMatch: 'full',
  },
  {
    path: 'session', loadChildren: () =>
      import('./session/session.module').then(m => m.SessionDemoModule)
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard] ,
    children: [{
      path: 'dashboard',
      loadChildren: () =>
        import('./core/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'patients',
      loadChildren: () =>
        import('./core/patients/patients.module').then(m => m.PatientsModule)
    },
    {
      path: 'rendez-vous',
      loadChildren: () =>
        import('./core/appointements/appointements.module').then(m => m.AppointementsModule)
    },
    ],
  }


];


@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
