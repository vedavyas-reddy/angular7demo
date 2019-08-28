import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('f') regForm :NgForm;

  patient = {
    name : '',
    mobile : ''
  }

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  // onSubmit(form : NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
     console.log(this.regForm);
     this.patient.name = this.regForm.value.name;
     this.patient.mobile = this.regForm.value.mobile;
     this.submitted = true;
     this.regForm.reset();
  }

}
