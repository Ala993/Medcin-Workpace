import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { PatientsRoutes, PatientsRoutingModule } from './patients-routing.module';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailPatientsComponent } from './detail-patients/detail-patients.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    ListPatientsComponent,
    DetailPatientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PatientsRoutes),
    MatTableModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule
  
  ]
})
export class PatientsModule { }
