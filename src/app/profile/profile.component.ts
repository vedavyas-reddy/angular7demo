import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  patients : Patient[];

  constructor(private patientService : PatientService) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatients()
    .subscribe(patients => this.patients = patients);
  }

}
