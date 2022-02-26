import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPatient } from 'app/models/patient-model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) { }

  createPatient(patient): Observable<IPatient>{
    return this.http.post(environment._api+"api/patients", patient);
  }
  getAllPatients(): Observable<IPatient[]>{
    return this.http.get<IPatient[]>(environment._api+"api/patients");
  }
  deletePatient(id){
    return this.http.delete(environment._api+"api/patients/"+id);
  }
  getPatientById(id): Observable<IPatient>{
    return this.http.get<IPatient>(environment._api+"api/patients/"+id);
  }
  editPatient(patient: IPatient): Observable<IPatient>{
    return this.http.put<IPatient>(environment._api+"api/patients/"+patient.id, patient);
  }
}
