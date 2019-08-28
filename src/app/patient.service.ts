import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { Patient } from './patient';
import { patients } from './data-patient';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  getPatients() : Observable<Patient[]> {
      return of(patients);    
  }
}
