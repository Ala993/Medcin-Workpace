import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'app/services/patient.service';
import { IPatient, Patient } from 'app/models/patient-model';


@Component({
  selector: 'app-detail-patients',
  templateUrl: './detail-patients.component.html',
  styleUrls: ['./detail-patients.component.css']
})
export class DetailPatientsComponent implements OnInit {
  patient = new Patient;
  patientId: string;
  constructor(
    private patientService: PatientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.patientId = params['id'];
      console.log(params['id']);
      
      if (this.patientId) {
        this.patientService.getPatientById(this.patientId).subscribe(res => {
          this.patient = res;
        })
      }
    })
  }
  submitAccount() {
    if (this.patientId) {
      this.patientService.editPatient(this.patient).subscribe(res => {
        this.router.navigate(['/patients'])
      })
    }
    else {
      this.patientService.createPatient(this.patient).subscribe(res => {
        this.router.navigate(['/patients'])
      })
    }
  }
}
