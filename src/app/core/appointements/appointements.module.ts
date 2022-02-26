import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAppointementsComponent } from './list-appointements/list-appointements.component';
import { RouterModule } from '@angular/router';
import { AppointementsRouting } from './appointements-routing';



@NgModule({
  declarations: [
    ListAppointementsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AppointementsRouting),
  ]
})
export class AppointementsModule { }
