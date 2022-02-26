import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPatientSituation } from 'app/models/patient-situation-model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patientSituation : IPatientSituation[] = [{firstName: "jhony", situation : "green", examination: "hospitalisé", desease: "COVID-19", recovery: 30, tests: 75}]
  displayedColumns = ['firstName', 'situation', 'examination', 'desease', 'recovery', 'tests'];
  dataSource = new MatTableDataSource<IPatientSituation>(this.patientSituation);
 
 
  constructor() { }

  ngOnInit(): void {
  }

}
