import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPatient, Patient, PATIENTS } from 'app/models/patient-model';
import { PatientService } from 'app/services/patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
 /*  @ViewChild(MatPaginator) paginator: MatPaginator;
  p; */
  patients : IPatient[];
  displayedColumns = ['firstName', 'lastName', 'birthDate', 'email', 'address', 'action'];
  dataSource = new MatTableDataSource<IPatient>(PATIENTS);
  constructor(
    private patientService: PatientService,
  ) { }

  ngOnInit(): void {
    this.loadAllPatients();
  }
  paginate(p){

  }

  deletePatient(patient: IPatient){
    this.patientService.deletePatient(patient.id).subscribe(res => {
      this.loadAllPatients();
    });
  }
  loadAllPatients(){
    this.patientService.getAllPatients().subscribe(res => {
      this.dataSource = new MatTableDataSource<IPatient>(res);
      
    })
  }
}

